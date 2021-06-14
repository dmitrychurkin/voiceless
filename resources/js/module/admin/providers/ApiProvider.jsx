import React, { createContext, memo } from "react";
import axios from "axios";

export const ApiContext = createContext(axios);

const ApiProvider = ({ instance, children }) => (
    <ApiContext.Provider value={instance}>
        {children}
    </ApiContext.Provider>
);

ApiProvider.defaultProps = {
    instance: axios
};

export default memo(ApiProvider);
