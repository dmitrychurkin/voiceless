import { useReducer } from "react";
import { reducers as routerReducers } from './useRouterActions';
import { reducers as generalReducers } from './useGeneralActions';

export const initialState = {
    router: {
        canActivate: true
    },
    general: {
        isLoading: false,
        isVisited: false,
        contactDetails: [],
        socialLinks: [],
        bankAccounts: []
    }
};

const useRootReducer = (initState = initialState) =>
    useReducer(
        createReducer({
            ...routerReducers,
            ...generalReducers
        }),
        initState
    );

function createReducer(handlers) {
    return (state = initialState, action) =>
        handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state;
}

export default useRootReducer;
