import React, { createContext, memo, useEffect, useState, useRef } from "react";
import useApi from "../hooks/useApi";
import useRequests from "../hooks/useRequests";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const api = useApi();

    const { user } = useRequests();
    const userFnRef = useRef(user);

    const [userState, setUserState] = useState();

    useEffect(() => {
        const authInterceptor = api.interceptors.response.use(
            response => response,
            error => {
                if ([401, 419].includes(error.status)) {
                    setUserState(null);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.response.eject(authInterceptor);
        };
    }, [api]);

    useEffect(() => {
        userFnRef.current()
            .then(({ data }) => setUserState(data.data))
            .catch(() => setUserState(null));
    }, []);

    return (
        <AuthContext.Provider value={userState}>
            {children}
        </AuthContext.Provider>
    );
};

export default memo(AuthProvider);
