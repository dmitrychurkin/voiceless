import { useMemo } from "react";
import action from "../helpers/actionCreator";
import useRequests from "./useRequests";
import useStore from "./useStore";

const SETTINGS_LOADING = 'GENERAL.SETTINGS_LOADING';
const SETTINGS_VISITED = 'GENERAL.SETTINGS_VISITED';
const SETTINGS_SUCCESS = 'GENERAL.SETTINGS_SUCCESS';
const SETTINGS_ERROR = 'GENERAL.SETTINGS_ERROR';
const CONTACT_DETAIL_UPDATE = 'GENERAL.SETTINGS.CONTACT_DETAIL_UPDATE';
const CONTACT_DETAIL_CREATE = 'GENERAL.SETTINGS.CONTACT_DETAIL_CREATE';
const CONTACT_DETAIL_DELETE = 'GENERAL.SETTINGS.CONTACT_DETAIL_DELETE';

const useGeneralActions = () => {
    const { dispatch } = useStore();
    const { getGeneralSettings, updateContactDetail, createContactDetail, deleteContactDetail } = useRequests();

    return useMemo(() => ({
        fetchGeneralSettings: async () => {
            dispatch(action(SETTINGS_LOADING, true));

            try {
                const { data: response } = await getGeneralSettings();
                dispatch(action(SETTINGS_SUCCESS, response.data));
                return response.data;
            } catch ({ response }) {
                dispatch(action(SETTINGS_ERROR, response.data));
            } finally {
                dispatch(action(SETTINGS_VISITED, true));
                dispatch(action(SETTINGS_LOADING, false));
            }
        },
        updateContactDetail: async requestArgs => {
            console.log(requestArgs);
            const response = await updateContactDetail(requestArgs);

            dispatch(action(CONTACT_DETAIL_UPDATE, requestArgs.data));
            console.log('updateContactDetail response => ', response);
        },
        createContactDetail: async requestArgs => {
            const { data: response } = await createContactDetail(requestArgs);

            dispatch(action(CONTACT_DETAIL_CREATE, response.data));
            console.log('createContactDetail response => ', response);
            return response.data;
        },
        deleteContactDetail: async requestArgs => {
            const response = await deleteContactDetail(requestArgs);

            dispatch(action(CONTACT_DETAIL_DELETE, requestArgs.data));
            console.log('deleteContactDetail response => ', response);
        }
    }), [
        dispatch,
        updateContactDetail,
        createContactDetail,
        deleteContactDetail
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
    [SETTINGS_ERROR]: (state, action) => ({
        ...state,
        general: {
            ...state.general,
            error: action.payload,
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
    })
};

export {
    reducers,
    useGeneralActions as default
};
