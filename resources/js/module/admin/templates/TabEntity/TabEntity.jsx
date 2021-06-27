import React, { memo, useRef, useState, useCallback, forwardRef } from 'react';
import { isEqual } from 'lodash';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Preloader from '../../atoms/Preloader';

const TransitionDefault = forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

const TabEntity = ({
    isLoading,
    title,
    emptyMessage,
    name,
    tabLabelFn,
    collection,
    model: Model,
    maxTabs,
    fields,
    actions,
    dialogProps: {
        alertTitleFn,
        Transition
    },
    formikProps: {
        initialValues, validationSchema, ...restFormikProps
    }
}) => {
    const formikFieldArrayHelpersRef = useRef();

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
        id: `${title.toLowerCase()}-tab-${index}`,
        'aria-controls': `${title.toLowerCase()}-tabpanel-${index}`
    }), []);

    const onAdd = useCallback((fieldArrayHelpers, Model) => () => {
        const { length } = fieldArrayHelpers.form.values[name];
        if (length < maxTabs) {
            fieldArrayHelpers.push(new Model);
            setTabState(length);
        }
    }, [name, maxTabs]);

    const handleRemove = useCallback((fieldArrayHelpers, index) => {
        fieldArrayHelpers.remove(index);
    }, []);

    const onDelete = useCallback((collection, fieldArrayHelpers, tabState) => () => {
        const resetTab = () => setTabState(state => state > 0 ? state - 1 : state);
        const data = collection[tabState];
        if (data) {
            setPromptState({
                data,
                handler: () => actions.delete({ data })
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
    }, [handleRemove, actions.delete]);

    const onSubmit = useCallback(async values => {
        const aggregatedHandlers = values[name].reduce((totalAggregated, tabData) => {
            // New item been added
            if (!('id' in tabData)) {
                return [
                    ...totalAggregated,
                    {
                        args: {
                            data: tabData
                        },
                        handler: actions.create
                    }
                ];
            }

            const data = Object.entries(
                collection
                    .find(generalTabData => generalTabData.id === tabData.id) ?? {}
            ).reduce((acc, [key, value]) => {
                const tabDataValue = tabData[key];
                if (!Object.is(value, tabDataValue)) {
                    return {
                        ...acc,
                        [key]: tabDataValue
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
                                id: tabData.id
                            }
                        },
                        handler: actions.update
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
                        const index = values[name].findIndex(tabData => isEqual({ ...tabData }, { ...responseDataCompadrable }));

                        if (~index) {
                            formikFieldArrayHelpersRef.current.replace(index, responseData);
                        }
                    }
                }
            } catch (err) {
                console.error(err);
            }
        }
    }, [collection, actions.create, actions.update, name]);

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
                        {isLoading ? (
                            <Preloader height='auto' />
                        ) : (
                            <Formik
                                {...restFormikProps}
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {({ values, isSubmitting, isValid }) => (
                                    <Form>
                                        <FieldArray
                                            name={name}
                                            render={arrayHelpers => {
                                                formikFieldArrayHelpersRef.current = arrayHelpers;

                                                return (
                                                    <>
                                                        {values[name].length > 0 ? (
                                                            <>
                                                                <Tabs
                                                                    value={tabState}
                                                                    onChange={onTabChange}
                                                                    variant='scrollable'
                                                                    scrollButtons='auto'
                                                                    aria-label="contact tabs"
                                                                >
                                                                    {values[name].map((tab, index) => (
                                                                        <Tab key={index} label={tabLabelFn(tab, index)} {...a11yProps(0)} />
                                                                    ))}
                                                                </Tabs>
                                                                {values[name].map((_, index) => (
                                                                    <div
                                                                        key={index}
                                                                        role="tabpanel"
                                                                        hidden={tabState !== index}
                                                                        id={`wrapped-tabpanel-${index}`}
                                                                        aria-labelledby={`wrapped-tab-${index}`}
                                                                    >
                                                                        {fields.map(({ name: fieldName, component: Component }) => (
                                                                            <Field key={fieldName} name={`${name}[${index}].${fieldName}`}>
                                                                                {({ field, meta, ...restFieldProps }) => (
                                                                                    <Box
                                                                                        display='flex'
                                                                                        flexDirection='column'
                                                                                        pt={5}
                                                                                    >
                                                                                        <Component
                                                                                            {...restFieldProps}
                                                                                            field={field}
                                                                                            meta={meta}
                                                                                            index={index}
                                                                                        />
                                                                                    </Box>
                                                                                )}
                                                                            </Field>
                                                                        ))}
                                                                    </div>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            <Typography
                                                                variant="h6"
                                                                gutterBottom
                                                            >
                                                                {emptyMessage || `No any ${title.toLowerCase()} yet...`}
                                                            </Typography>
                                                        )}
                                                        <CardActions>
                                                            {values[name].length > 0 && (
                                                                <Button
                                                                    variant='outlined'
                                                                    size='small'
                                                                    color='secondary'
                                                                    onClick={onDelete(collection, arrayHelpers, tabState)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            )}
                                                            {values[name].length < maxTabs && (
                                                                <Button
                                                                    variant='outlined'
                                                                    size='small'
                                                                    color='primary'
                                                                    onClick={onAdd(arrayHelpers, Model)}
                                                                >
                                                                    Add
                                                                </Button>
                                                            )}
                                                            {isValid && !isEqual(collection, values[name]) && (
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
                TransitionComponent={Transition ?? TransitionDefault}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{alertTitleFn(promptState)}</DialogTitle>
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

export default memo(TabEntity);
