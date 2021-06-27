import React, { memo, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import useGeneralActions from '../../hooks/useGeneralActions';
import useStore from '../../hooks/useStore';
import Contact from '../../entities/Contact';
import SocialLink from '../../entities/SocialLink';
import TabEntity from '../../templates/TabEntity';
import { contactDetailsValidationSchema, RANGES as contactDetailRanges } from '../../validators/contactDetail';
import { socialLinksValidationSchema, RANGES as socialLinksRanges } from '../../validators/socialLink';

const DashboardGeneral = () => {
    const { state: { general } } = useStore();
    const {
        fetchGeneralSettings,
        createContactDetail, updateContactDetail, deleteContactDetail,
        createSocialLink, updateSocialLink, deleteSocialLink
    } = useGeneralActions();

    useEffect(() => {
        if (!general.isVisited) {
            fetchGeneralSettings()
                .catch(({ response }) => console.error(response.data));
        }
    }, [fetchGeneralSettings, general.isVisited]);

    return (
        <>
            <TabEntity
                isLoading={general.isLoading}
                title='Contacts'
                name='contactDetails'
                tabLabelFn={(contact, index) => contact.contactPerson || `Contact person ${index + 1} full name`}
                collection={general.contactDetails}
                model={Contact}
                maxTabs={contactDetailRanges.contactDetails.MAX}
                fields={[
                    {
                        name: 'phone',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`phone-${index}`}
                                type='tel'
                                label='Phone*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    },
                    {
                        name: 'email',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`email-${index}`}
                                type='email'
                                label='Email*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    },
                    {
                        name: 'address',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`address-${index}`}
                                label='Address*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    },
                    {
                        name: 'contactPerson',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`contactPerson-${index}`}
                                label='Contact person*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    }
                ]}
                actions={{
                    create: createContactDetail,
                    update: updateContactDetail,
                    delete: deleteContactDetail
                }}
                dialogProps={{
                    alertTitleFn: promptState => `Are you sure you want to delete ${promptState?.data.contactPerson}?`
                }}
                formikProps={{
                    initialValues: { contactDetails: general.contactDetails },
                    validationSchema: contactDetailsValidationSchema
                }}
            />
            <TabEntity
                isLoading={general.isLoading}
                title='Social Links'
                name='socialLinks'
                tabLabelFn={(socialLink, index) => socialLink.name || `Social link ${index + 1}`}
                collection={general.socialLinks}
                model={SocialLink}
                maxTabs={socialLinksRanges.socialLinks.MAX}
                fields={[
                    {
                        name: 'name',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`socialLinkName-${index}`}
                                label='Social link name*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    },
                    {
                        name: 'url',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`socialLinkUrl-${index}`}
                                label='Social link URL*'
                                variant='outlined'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">https://</InputAdornment>,
                                }}
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    }
                ]}
                actions={{
                    create: createSocialLink,
                    update: updateSocialLink,
                    delete: deleteSocialLink
                }}
                dialogProps={{
                    alertTitleFn: promptState => `Are you sure you want to delete ${promptState?.data.name}?`
                }}
                formikProps={{
                    initialValues: { socialLinks: general.socialLinks },
                    validationSchema: socialLinksValidationSchema
                }}
            />
        </>
    );
};

export default memo(DashboardGeneral);