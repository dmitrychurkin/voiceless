import { useMemo } from "react";
import action from "../helpers/actionCreator";
import useRequests from "./useRequests";
import useStore from "./useStore";

const SETTINGS_LOADING = 'GENERAL.SETTINGS_LOADING';
const SETTINGS_VISITED = 'GENERAL.SETTINGS_VISITED';
const SETTINGS_SUCCESS = 'GENERAL.SETTINGS_SUCCESS';;
const CONTACT_DETAIL_UPDATE = 'GENERAL.SETTINGS.CONTACT_DETAIL_UPDATE';
const CONTACT_DETAIL_CREATE = 'GENERAL.SETTINGS.CONTACT_DETAIL_CREATE';
const CONTACT_DETAIL_DELETE = 'GENERAL.SETTINGS.CONTACT_DETAIL_DELETE';
const SOCIAL_LINK_UPDATE = 'GENERAL.SETTINGS.SOCIAL_LINK_UPDATE';
const SOCIAL_LINK_CREATE = 'GENERAL.SETTINGS.SOCIAL_LINK_CREATE';
const SOCIAL_LINK_DELETE = 'GENERAL.SETTINGS.SOCIAL_LINK_DELETE';

const useGeneralActions = () => {
    const { dispatch } = useStore();
    const {
        getGeneralSettings,
        updateContactDetail, createContactDetail, deleteContactDetail,
        updateSocialLink, createSocialLink, deleteSocialLink
    } = useRequests();

    return useMemo(() => ({
        fetchGeneralSettings: async () => {
            dispatch(action(SETTINGS_LOADING, true));

            try {
                const { data: response } = await getGeneralSettings();
                dispatch(action(SETTINGS_SUCCESS, response.data));
                dispatch(action(SETTINGS_VISITED, true));
                return response.data;
            }finally {
                dispatch(action(SETTINGS_LOADING, false));
            }
        },
        // Contact Detail
        updateContactDetail: async requestArgs => {
            await updateContactDetail(requestArgs);

            dispatch(action(CONTACT_DETAIL_UPDATE, requestArgs.data));
        },
        createContactDetail: async requestArgs => {
            const { data: response } = await createContactDetail(requestArgs);

            dispatch(action(CONTACT_DETAIL_CREATE, response.data));

            return response.data;
        },
        deleteContactDetail: async requestArgs => {
            await deleteContactDetail(requestArgs);

            dispatch(action(CONTACT_DETAIL_DELETE, requestArgs.data));
        },
        // Social Link
        updateSocialLink: async requestArgs => {
            await updateSocialLink(requestArgs);

            dispatch(action(SOCIAL_LINK_UPDATE, requestArgs.data));
        },
        createSocialLink: async requestArgs => {
            const { data: response } = await createSocialLink(requestArgs);

            dispatch(action(SOCIAL_LINK_CREATE, response.data));

            return response.data;
        },
        deleteSocialLink: async requestArgs => {
            await deleteSocialLink(requestArgs);

            dispatch(action(SOCIAL_LINK_DELETE, requestArgs.data));
        }
    }), [
        dispatch,
        updateContactDetail,
        createContactDetail,
        deleteContactDetail,
        updateSocialLink,
        createSocialLink,
        deleteSocialLink
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
    [CONTACT_DETAIL_UPDATE]: (state, action) => {
        const contactDetails = state.general.contactDetails.map(contactDetail => {
            if (contactDetail.id === action.payload.id) {
                return {
                    ...contactDetail,
                    ...action.payload
                };
            }
            return contactDetail;
        });

        return {
            ...state,
            general: {
                ...state.general,
                contactDetails
            }
        };
    },
    [CONTACT_DETAIL_CREATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            contactDetails: [...state.general.contactDetails, action.payload]
        }
    }),
    [CONTACT_DETAIL_DELETE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            contactDetails: state.general.contactDetails.filter(contactDetail => contactDetail.id !== action.payload.id)
        }
    }),
    [SOCIAL_LINK_UPDATE]: (state, action) => {
        const socialLinks = state.general.socialLinks.map(socialLink => {
            if (socialLink.id === action.payload.id) {
                return {
                    ...socialLink,
                    ...action.payload
                };
            }
            return socialLink;
        });

        return {
            ...state,
            general: {
                ...state.general,
                socialLinks
            }
        };
    },
    [SOCIAL_LINK_CREATE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            socialLinks: [...state.general.socialLinks, action.payload]
        }
    }),
    [SOCIAL_LINK_DELETE]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            socialLinks: state.general.socialLinks.filter(socialLink => socialLink.id !== action.payload.id)
        }
    })
};

export {
    reducers,
    useGeneralActions as default
};
