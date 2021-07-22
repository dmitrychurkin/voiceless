import { useCallback } from "react";
import action from "../helpers/actionCreator";
import useStore from "./useStore";

const useThunk = () => {
    const { dispatch } = useStore();

    return useCallback(({ type, api }) => async requestArgs => {
        const { data: response } = await api(requestArgs);

        dispatch(action(type, (response || requestArgs).data));

        return response.data;
    }, [dispatch]);
};

export default useThunk;
