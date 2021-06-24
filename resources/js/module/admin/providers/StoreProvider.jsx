import React, { memo, createContext } from "react";
import { isEqual } from "lodash";
import useRootReducer, { initialState } from '../hooks/useRootReducer';

export const StoreContext = createContext(initialState);

const StoreProvider = memo(props => (
    <StoreContext.Provider {...props} />
), (prevProps, nextProps) => isEqual(prevProps.value.state, nextProps.value.state));

const Store = ({ children }) => {
    const [state, dispatch] = useRootReducer();

    return (
        <StoreProvider value={{
            state,
            dispatch
        }}>
            {children}
        </StoreProvider>
    );
};

export default memo(Store);
