import React, { memo, useState, useCallback, useEffect, useRef, forwardRef } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { isEqual } from 'lodash';
import * as Yup from 'yup';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useGeneralActions from '../../hooks/useGeneralActions';
import useStore from '../../hooks/useStore';
import Contact from '../../entities/Contact';
import Preloader from '../../atoms/Preloader';

const RANGES = {
    contactDetails: {
        phone: {
            MAX: 20
        },
        email: {
            MAX: 255
        },
        address: {
            MAX: 200
        },
        contactPerson: {
            MAX: 100
        },
        MAX: 10
    },
};

Yup.addMethod(Yup.array, 'unique', function (message, mapper = a => a) {
    return this.test('unique', message, list => list.length === new Set(list.map(mapper)).size);
});

const contactDetailsValidationSchema = Yup.object().shape({
    contactDetails: Yup.array()
        .of(
            Yup.object().shape({
                phone: Yup.string()
                    .required('Phone number is required')
                    .matches(
                        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
                        'Phone number is not valid'
                    )
                    .max(RANGES.contactDetails.phone.MAX, `Phone should be lees then ${RANGES.contactDetails.phone.MAX} characters`),
                email: Yup.string()
                    .email('Email is not valid')
                    .required('Email is required')
                    .max(RANGES.contactDetails.email.MAX, `Email should be lees then ${RANGES.contactDetails.email.MAX} characters`),
                address: Yup.string()
                    .required('Address is required')
                    .max(RANGES.contactDetails.address.MAX, `Address should be lees then ${RANGES.contactDetails.address.MAX} characters`),
                contactPerson: Yup.string()
                    .required('Contact person full name is required')
                    .max(RANGES.contactDetails.contactPerson.MAX, `Contact person full name should be lees then ${RANGES.contactDetails.contactPerson.MAX} characters`)
            })
        )
        .unique('Duplicate email is not allowed', a => a.email)
        .max(RANGES.contactDetails.MAX, `Maximum of ${RANGES.contactDetails.MAX} contacts`)
});

const Transition = forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

const DashboardGeneral = () => {
    const formikFieldArrayHelpersRef = useRef();
    const { state: { general } } = useStore();
    const { fetchGeneralSettings, createContactDetail, updateContactDetail, deleteContactDetail } = useGeneralActions();

    const [tabState, setTabState] = useState(0);
    const [promptState, setPromptState] = useState(null);

    const handleClose = useCallback(() => {
        setPromptState(null);
    }, []);

    const handleOk = useCallback(() => {
        setPromptState(({ handler }) => {
            handler();
            return null;
        });
    }, []);

    const onTabChange = useCallback((_, value) => {
        setTabState(value);
    }, []);

    const a11yProps = useCallback(index => ({
        id: `contact-tab-${index}`,
        'aria-controls': `contact-tabpanel-${index}`
    }), []);

    const onAdd = useCallback((fieldArrayHelpers, Model) => () => {
        const { length } = fieldArrayHelpers.form.values.contactDetails;
        if (length < RANGES.contactDetails.MAX) {
            fieldArrayHelpers.push(new Model);
            setTabState(length);
        }
    }, []);

    const handleRemove = useCallback((fieldArrayHelpers, index) => {
        fieldArrayHelpers.remove(index);
    }, []);

    const onDelete = useCallback((collection, fieldArrayHelpers, tabState) => () => {
        const resetTab = () => setTabState(state => state > 0 ? state - 1 : state);
        const data = collection[tabState];
        if (data) {
            setPromptState({
                data,
                handler: () => deleteContactDetail({ data })
                    .then(() => {
                        handleRemove(fieldArrayHelpers, tabState);
                        resetTab();
                    })
                    .catch(console.error)
            });
            return;
        }
        handleRemove(fieldArrayHelpers, tabState);
        resetTab();
    }, [handleRemove, deleteContactDetail]);

    const onSubmitContactDetailForm = useCallback(async values => {
        const aggregatedHandlers = values.contactDetails.reduce((totalAggregated, contactDetail) => {
            // New item been added
            if (!('id' in contactDetail)) {
                return [
                    ...totalAggregated,
                    {
                        args: {
                            data: contactDetail
                        },
                        handler: createContactDetail
                    }
                ];
            }

            const data = Object.entries(
                general.contactDetails
                    .find(generalContactDetail => generalContactDetail.id === contactDetail.id) ?? {}
            ).reduce((acc, [key, value]) => {
                const contactDetailValue = contactDetail[key];
                if (!isEqual(value, contactDetailValue)) {
                    return {
                        ...acc,
                        [key]: contactDetailValue
                    };
                }
                return acc;
            }, {});

            // Update existing item
            if (Object.entries(data).length > 0) {
                return [
                    ...totalAggregated,
                    {
                        args: {
                            data: {
                                ...data,
                                id: contactDetail.id
                            }
                        },
                        handler: updateContactDetail
                    }
                ];
            }

            return totalAggregated;
        }, []);

        if (aggregatedHandlers.length > 0) {
            try {
                const responses = await Promise.allSettled(
                    aggregatedHandlers.map(({ handler, args }) => handler(args))
                );

                for await (const { value: responseData } of responses) {
                    if (responseData) {
                        const responseDataCompadrable = { ...responseData };
                        delete responseDataCompadrable.id;
                        const index = values.contactDetails.findIndex(contactDetail => isEqual({ ...contactDetail }, { ...responseDataCompadrable }));

                        if (~index) {
                            formikFieldArrayHelpersRef.current.replace(index, responseData);
                        }
                    }
                }
            } catch (err) {
                console.error(err);
            }
        }
    }, [general.contactDetails, createContactDetail]);

    useEffect(() => {
        if (!general.isVisited) {
            fetchGeneralSettings();
        }
    }, [fetchGeneralSettings, general.isVisited]);

    return (
        <>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                            color="textSecondary"
                            gutterBottom
                        >
                            Contacts
                        </Typography>
                        {general.isLoading ? (
                            <Preloader height='auto' />
                        ) : (
                            <Formik
                                initialValues={{ contactDetails: general.contactDetails }}
                                validationSchema={contactDetailsValidationSchema}
                                onSubmit={onSubmitContactDetailForm}
                            >
                                {({ values, isSubmitting, isValid }) => (
                                    <Form>
                                        <FieldArray
                                            name='contactDetails'
                                            render={arrayHelpers => {
                                                formikFieldArrayHelpersRef.current = arrayHelpers;

                                                return (
                                                    <>
                                                        {values.contactDetails.length > 0 ? (
                                                            <>
                                                                <Tabs
                                                                    value={tabState}
                                                                    onChange={onTabChange}
                                                                    variant='scrollable'
                                                                    scrollButtons='auto'
                                                                    aria-label="contact tabs"
                                                                >
                                                                    {values.contactDetails.map((contact, index) => (
                                                                        <Tab key={index} label={contact.contactPerson || `Contact person ${index + 1} full name`} {...a11yProps(0)} />
                                                                    ))}
                                                                </Tabs>
                                                                {values.contactDetails.map((_, index) => (
                                                                    <div
                                                                        key={index}
                                                                        role="tabpanel"
                                                                        hidden={tabState !== index}
                                                                        id={`wrapped-tabpanel-${index}`}
                                                                        aria-labelledby={`wrapped-tab-${index}`}
                                                                    >
                                                                        <Field name={`contactDetails[${index}].phone`}>
                                                                            {({ field, meta }) => (
                                                                                <Box
                                                                                    display='flex'
                                                                                    flexDirection='column'
                                                                                    pt={5}
                                                                                >
                                                                                    <TextField
                                                                                        {...field}
                                                                                        id={`phone-${index}`}
                                                                                        type='tel'
                                                                                        label='Phone*'
                                                                                        variant='outlined'
                                                                                        error={Boolean(meta.error)}
                                                                                        helperText={meta.error}
                                                                                    />
                                                                                </Box>
                                                                            )}
                                                                        </Field>
                                                                        <Field name={`contactDetails[${index}].email`}>
                                                                            {({ field, meta }) => (
                                                                                <Box
                                                                                    display='flex'
                                                                                    flexDirection='column'
                                                                                    pt={3}
                                                                                >
                                                                                    <TextField
                                                                                        {...field}
                                                                                        id={`email-${index}`}
                                                                                        type='email'
                                                                                        label='Email*'
                                                                                        variant='outlined'
                                                                                        error={Boolean(meta.error)}
                                                                                        helperText={meta.error}
                                                                                    />
                                                                                </Box>
                                                                            )}
                                                                        </Field>
                                                                        <Field name={`contactDetails[${index}].address`}>
                                                                            {({ field, meta }) => (
                                                                                <Box
                                                                                    display='flex'
                                                                                    flexDirection='column'
                                                                                    pt={3}
                                                                                >
                                                                                    <TextField
                                                                                        {...field}
                                                                                        id={`address-${index}`}
                                                                                        label='Address*'
                                                                                        variant='outlined'
                                                                                        error={Boolean(meta.error)}
                                                                                        helperText={meta.error}
                                                                                    />
                                                                                </Box>
                                                                            )}
                                                                        </Field>
                                                                        <Field name={`contactDetails[${index}].contactPerson`}>
                                                                            {({ field, meta }) => (
                                                                                <Box
                                                                                    display='flex'
                                                                                    flexDirection='column'
                                                                                    pt={3}
                                                                                    pb={5}
                                                                                >
                                                                                    <TextField
                                                                                        {...field}
                                                                                        id={`contactPerson-${index}`}
                                                                                        label='Contact person*'
                                                                                        variant='outlined'
                                                                                        error={Boolean(meta.error)}
                                                                                        helperText={meta.error}
                                                                                    />
                                                                                </Box>
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            <Typography
                                                                variant="h6"
                                                                gutterBottom
                                                            >
                                                                No any contacts yet...
                                                            </Typography>
                                                        )}
                                                        <CardActions>
                                                            {values.contactDetails.length > 0 && (
                                                                <Button
                                                                    variant='outlined'
                                                                    size='small'
                                                                    color='secondary'
                                                                    onClick={onDelete(general.contactDetails, arrayHelpers, tabState)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            )}
                                                            {values.contactDetails.length < RANGES.contactDetails.MAX && (
                                                                <Button
                                                                    variant='outlined'
                                                                    size='small'
                                                                    color='primary'
                                                                    onClick={onAdd(arrayHelpers, Contact)}
                                                                >
                                                                    Add
                                                                </Button>
                                                            )}
                                                            {isValid && !isEqual(general.contactDetails, values.contactDetails) && (
                                                                <Button
                                                                    variant='outlined'
                                                                    size='small'
                                                                    type='submit'
                                                                    disabled={isSubmitting}
                                                                >
                                                                    Save
                                                                </Button>
                                                            )}
                                                        </CardActions>
                                                    </>
                                                );
                                            }}
                                        />
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </CardContent>
                </Card>
            </Grid>
            <Dialog
                open={Boolean(promptState)}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{`Are you sure you want to delete ${promptState?.data.contactPerson}?`}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        cancel
                    </Button>
                    <Button onClick={handleOk} color="secondary">
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default memo(DashboardGeneral);