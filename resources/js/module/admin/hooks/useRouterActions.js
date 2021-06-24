import { useMemo } from "react";
import action from "../helpers/actionCreator";
import useStore from "./useStore";

const SET_LOCK = 'ROUTER.SET_LOCK';

const useRouterActions = () => {
    const { dispatch } = useStore();

    return useMemo(() => ({
        setLock: canActivate => dispatch(action(SET_LOCK, canActivate))
    }), []);
};

const reducers = {
    [SET_LOCK]: (state, action) => ({
        ...state,
        router: {
            ...state.router,
            canActivate: action.payload
        }
    })
};

export {
    reducers,
    useRouterActions as default
};
