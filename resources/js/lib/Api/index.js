/**
 *
 * @param {*} input RequestInfo
 * @param {*} init? RequestInit
 * @returns Promise<Response>
 */
export default function(input, init = {}) {
    const headers = new Headers([
        ['X-Requested-With', 'XMLHttpRequest']
    ]);

    // set headers
    if (init.headers instanceof Headers) {
        init.headers.forEach((value, key) => {
            headers.append(key, value);
        });
    }else if (init.headers instanceof Object) {
        for (const [key, value] of Object.entries(init.headers)) {
            headers.append(key, value);
        }
    }

    return fetch(input, {
        ...init,
        headers
    });
}