export const addToCollection = (collection, payload) => [...collection, payload];

export const updateCollection = (collection, payload) => collection.map(resource => {
    if (resource.id === payload.id) {
        return {
            ...resource,
            ...payload
        };
    }
    return resource;
});

export const removeFromCollection = (collection, payload) => collection.filter(resource => resource.id !== payload.id);
