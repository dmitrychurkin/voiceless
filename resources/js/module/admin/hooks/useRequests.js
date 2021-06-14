import { useCallback } from "react";
import useApi from "./useApi";

const useRequests = () => {
    const api = useApi();

    return {
        csrf: useCallback((
            { method = 'get', url = '/sanctum/csrf-cookie', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),
        user: useCallback((
            { method = 'get', url = '/api/user', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),
        login: useCallback((
            { method = 'post', url = '/admin/login', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),
        logout: useCallback((
            { method = 'post', url = '/admin/logout', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),
        forgotPassword: useCallback((
            { method = 'post', url = '/admin/forgot-password', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),
        resetPassword: useCallback((
            { method = 'post', url = '/admin/reset-password', ...rest } = {}
        ) => api({ method, url, ...rest }), [api])
    };
};

export default useRequests;
