import React, { memo, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import useGeneralActions from '../../hooks/useGeneralActions';
import useStore from '../../hooks/useStore';
import Contact from '../../entities/Contact';
import SocialLink from '../../entities/SocialLink';
import BankAccount from '../../entities/BankAccount';
import TabEntity from '../../templates/TabEntity';
import { validationSchema as contactDetailValidationSchema, RANGES as contactDetailRanges } from '../../validators/contactDetail';
import { validationSchema as socialLinkValidationSchema, RANGES as socialLinkRanges } from '../../validators/socialLink';
import { validationSchema as bankAccountValidationSchema, RANGES as bankAccountRanges } from '../../validators/bankAccount';

const DashboardGeneral = () => {
    const { state: { general } } = useStore();
    const {
        fetchGeneralSettings,
        createContactDetail, updateContactDetail, deleteContactDetail,
        createSocialLink, updateSocialLink, deleteSocialLink,
        createBankAccount, updateBankAccount, deleteBankAccount
    } = useGeneralActions();
    const generalSettingsFnRef = useRef(fetchGeneralSettings);

    useEffect(() => {
        if (!general.isVisited) {
            generalSettingsFnRef.current()
                .catch(({ response }) => console.error(response.data));
        }
    }, [general.isVisited]);

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
                    validationSchema: contactDetailValidationSchema
                }}
            />
            <TabEntity
                isLoading={general.isLoading}
                title='Social Links'
                name='socialLinks'
                tabLabelFn={(socialLink, index) => socialLink.name || `Social link ${index + 1}`}
                collection={general.socialLinks}
                model={SocialLink}
                maxTabs={socialLinkRanges.socialLinks.MAX}
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
                                    startAdornment: <InputAdornment position="start">http(s)://</InputAdornment>,
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
                    validationSchema: socialLinkValidationSchema
                }}
            />
            <TabEntity
                isLoading={general.isLoading}
                title='Bank Accounts'
                name='bankAccounts'
                tabLabelFn={(bankAccount, index) => bankAccount.accountName || `Bank account ${index + 1}`}
                collection={general.bankAccounts}
                model={BankAccount}
                maxTabs={bankAccountRanges.bankAccounts.MAX}
                fields={[
                    {
                        name: 'bankName',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`bankName-${index}`}
                                label='Bank name*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    },
                    {
                        name: 'accountName',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`accountName-${index}`}
                                label='Account name*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    },
                    {
                        name: 'accountNumber',
                        component: ({ field, meta, index }) => (
                            <TextField
                                {...field}
                                id={`accountNumber-${index}`}
                                label='Account number*'
                                variant='outlined'
                                error={Boolean(meta.error)}
                                helperText={meta.error}
                            />
                        )
                    }
                ]}
                actions={{
                    create: createBankAccount,
                    update: updateBankAccount,
                    delete: deleteBankAccount
                }}
                dialogProps={{
                    alertTitleFn: promptState => `Are you sure you want to delete ${promptState?.data.accountName}?`
                }}
                formikProps={{
                    initialValues: { bankAccounts: general.bankAccounts },
                    validationSchema: bankAccountValidationSchema
                }}
            />
        </>
    );
};

export default memo(DashboardGeneral);