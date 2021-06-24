import React, { createContext, memo, useCallback, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import useRequests from "../hooks/useRequests";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const api = useApi();
    const { user } = useRequests();

    const [userState, setUserState] = useState();

    const getUser = useCallback(async () => {
        try {
            const { data } = await user();
            setUserState(data.data);
        }catch {
            setUserState(null);
        }
    }, [user]);

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
        getUser();
    }, [getUser]);

    return (
        <AuthContext.Provider value={userState}>
            {children}
        </AuthContext.Provider>
    );
};

export default memo(AuthProvider);
