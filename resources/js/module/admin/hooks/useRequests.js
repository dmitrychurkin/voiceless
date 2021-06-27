import { useCallback } from "react";
import useApi from "./useApi";

const useRequests = () => {
    const api = useApi();

    return {
        // Meta
        csrf: useCallback((
            { method = 'get', url = '/sanctum/csrf-cookie', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),

        // User
        user: useCallback((
            { method = 'get', url = '/api/user', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),

        // Auth
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
        ) => api({ method, url, ...rest }), [api]),

        // Dashboard
        getGeneralSettings: useCallback((
            { method = 'get', url = '/api/settings', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),

        // Contact Details
        updateContactDetail: useCallback((
            { method = 'patch', url = '/api/contact-details', data, ...rest } = {}
        ) => api({ method, url: `${url}/${data.id}`, data: { ...data, id: undefined }, ...rest }), [api]),
        createContactDetail: useCallback((
            { method = 'post', url = '/api/contact-details', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),
        deleteContactDetail: useCallback((
            { method = 'delete', url = '/api/contact-details', data, ...rest } = {}
        ) => api({ method, url: `${url}/${data.id}`, ...rest }), [api]),

        // Social Links
        updateSocialLink: useCallback((
            { method = 'patch', url = '/api/social-links', data, ...rest } = {}
        ) => api({ method, url: `${url}/${data.id}`, data: { ...data, id: undefined }, ...rest }), [api]),
        createSocialLink: useCallback((
            { method = 'post', url = '/api/social-links', ...rest } = {}
        ) => api({ method, url, ...rest }), [api]),
        deleteSocialLink: useCallback((
            { method = 'delete', url = '/api/social-links', data, ...rest } = {}
        ) => api({ method, url: `${url}/${data.id}`, ...rest }), [api])
    };
};

export default useRequests;
