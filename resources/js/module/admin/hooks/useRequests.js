import { useCallback } from "react";
import useApi from "./useApi";

const useRequests = () => {
    const api = useApi();

    const requestHandler = useCallback(({ method = 'get', ...settings } = {}) =>
        (extraSettings = {}) => api({ method, ...settings, ...extraSettings }), [api]);

    const updateResource = useCallback((
        { method = 'patch', url, ...settings } = {}
    ) => ({ data, ...extraSettings } = {}) => api({
        method,
        url: `${url}/${data.id}`,
        data: { ...data, id: undefined },
        ...settings,
        ...extraSettings
    }), [api]);

    const deleteResource = useCallback((
        { method = 'delete', url, ...settings } = {}
    ) => ({ data, ...extraSettings } = {}) => api({
        method,
        url: `${url}/${data.id}`,
        ...settings,
        ...extraSettings
    }), [api]);

    return {
        // Meta
        csrf: requestHandler({ url: '/sanctum/csrf-cookie' }),

        // User
        user: requestHandler({ url: '/api/user' }),

        // Auth
        login: requestHandler({ method: 'post', url: '/admin/login' }),
        logout: requestHandler({ method: 'post', url: '/admin/logout' }),
        forgotPassword: requestHandler({ method: 'post', url: '/admin/forgot-password' }),
        resetPassword: requestHandler({ method: 'post', url: '/admin/reset-password' }),

        // Dashboard
        getGeneralSettings: requestHandler({ url: '/api/settings' }),

        // Contact Details
        updateContactDetail: updateResource({ url: '/api/contact-details' }),
        createContactDetail: requestHandler({ method: 'post', url: '/api/contact-details' }),
        deleteContactDetail: deleteResource({ url: '/api/contact-details' }),

        // Social Links
        updateSocialLink: updateResource({ url: '/api/social-links' }),
        createSocialLink: requestHandler({ method: 'post', url: '/api/social-links' }),
        deleteSocialLink: deleteResource({ url: '/api/social-links' }),

        // Bank Accounts
        updateBankAccount: updateResource({ url: '/api/bank-accounts' }),
        createBankAccount: requestHandler({ method: 'post', url: '/api/bank-accounts' }),
        deleteBankAccount: deleteResource({ url: '/api/bank-accounts' })
    };
};

export default useRequests;
