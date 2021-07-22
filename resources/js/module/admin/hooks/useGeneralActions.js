import { useMemo } from "react";
import action from "../helpers/actionCreator";
import useRequests from "./useRequests";
import useStore from "./useStore";
import useThunk from "./useThunk";
import * as collectionModifiers from '../helpers/collectionModifiers';

const SETTINGS_LOADING = 'GENERAL.SETTINGS_LOADING';
const SETTINGS_VISITED = 'GENERAL.SETTINGS_VISITED';
const SETTINGS_SUCCESS = 'GENERAL.SETTINGS_SUCCESS';;
const CONTACT_DETAIL_UPDATE = 'GENERAL.SETTINGS.CONTACT_DETAIL_UPDATE';
const CONTACT_DETAIL_CREATE = 'GENERAL.SETTINGS.CONTACT_DETAIL_CREATE';
const CONTACT_DETAIL_DELETE = 'GENERAL.SETTINGS.CONTACT_DETAIL_DELETE';
const SOCIAL_LINK_UPDATE = 'GENERAL.SETTINGS.SOCIAL_LINK_UPDATE';
const SOCIAL_LINK_CREATE = 'GENERAL.SETTINGS.SOCIAL_LINK_CREATE';
const SOCIAL_LINK_DELETE = 'GENERAL.SETTINGS.SOCIAL_LINK_DELETE';
const BANK_ACCOUNT_UPDATE = 'GENERAL.SETTINGS.BANK_ACCOUNT_UPDATE';
const BANK_ACCOUNT_CREATE = 'GENERAL.SETTINGS.BANK_ACCOUNT_CREATE';
const BANK_ACCOUNT_DELETE = 'GENERAL.SETTINGS.BANK_ACCOUNT_DELETE';

const useGeneralActions = () => {
    const { dispatch } = useStore();
    const {
        getGeneralSettings,
        updateContactDetail, createContactDetail, deleteContactDetail,
        updateSocialLink, createSocialLink, deleteSocialLink,
        updateBankAccount, createBankAccount, deleteBankAccount
    } = useRequests();

    const thunk = useThunk();

    return useMemo(() => ({
        fetchGeneralSettings: async () => {
            dispatch(action(SETTINGS_LOADING, true));

            try {
                const { data: response } = await getGeneralSettings();
                dispatch(action(SETTINGS_SUCCESS, response.data));
                dispatch(action(SETTINGS_VISITED, true));
                return response.data;
            } finally {
                dispatch(action(SETTINGS_LOADING, false));
            }
        },

        // Contact Detail
        updateContactDetail: thunk({ type: CONTACT_DETAIL_UPDATE, api: updateContactDetail }),
        createContactDetail: thunk({ type: CONTACT_DETAIL_CREATE, api: createContactDetail }),
        deleteContactDetail: thunk({ type: CONTACT_DETAIL_DELETE, api: deleteContactDetail }),

        // Social Link
        updateSocialLink: thunk({ type: SOCIAL_LINK_UPDATE, api: updateSocialLink }),
        createSocialLink: thunk({ type: SOCIAL_LINK_CREATE, api: createSocialLink }),
        deleteSocialLink: thunk({ type: SOCIAL_LINK_DELETE, api: deleteSocialLink }),

        // Bank account
        updateBankAccount: thunk({ type: BANK_ACCOUNT_UPDATE, api: updateBankAccount }),
        createBankAccount: thunk({ type: BANK_ACCOUNT_CREATE, api: createBankAccount }),
        deleteBankAccount: thunk({ type: BANK_ACCOUNT_DELETE, api: deleteBankAccount }),
    }), [
        dispatch,
        thunk,
        updateContactDetail, createContactDetail, deleteContactDetail,
        updateSocialLink, createSocialLink, deleteSocialLink,
        updateBankAccount, createBankAccount, deleteBankAccount
    ]);
};

const reducers = {
    [SETTINGS_LOADING]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            isLoading: action.payload
        }
    }),
    [SETTINGS_SUCCESS]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            ...action.payload
        }
    }),
    [SETTINGS_VISITED]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            isVisited: action.payload
        }
    }),
    [CONTACT_DETAIL_UPDATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            contactDetails: collectionModifiers.updateCollection(
                state.general.contactDetails,
                action.payload
            )
        }
    }),
    [CONTACT_DETAIL_CREATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            contactDetails: collectionModifiers.addToCollection(
                state.general.contactDetails,
                action.payload
            )
        }
    }),
    [CONTACT_DETAIL_DELETE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            contactDetails: collectionModifiers.removeFromCollection(
                state.general.contactDetails,
                action.payload
            )
        }
    }),
    [SOCIAL_LINK_UPDATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            socialLinks: collectionModifiers.updateCollection(
                state.general.socialLinks,
                action.payload
            )
        }
    }),
    [SOCIAL_LINK_CREATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            socialLinks:collectionModifiers.addToCollection(
                state.general.socialLinks,
                action.payload
            )
        }
    }),
    [SOCIAL_LINK_DELETE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            socialLinks: collectionModifiers.removeFromCollection(
                state.general.socialLinks,
                action.payload
            )
        }
    }),
    [BANK_ACCOUNT_UPDATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            bankAccounts: collectionModifiers.updateCollection(
                state.general.bankAccounts,
                action.payload
            )
        }
    }),
    [BANK_ACCOUNT_CREATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            bankAccounts: collectionModifiers.addToCollection(
                state.general.bankAccounts,
                action.payload
            )
        }
    }),
    [BANK_ACCOUNT_DELETE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            bankAccounts: collectionModifiers.removeFromCollection(
                state.general.bankAccounts,
                action.payload
            )
        }
    })
};

export {
    reducers,
    useGeneralActions as default
};
