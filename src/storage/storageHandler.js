const storage = sessionStorage;

export const storeItem = (key, value) => {
    storage.setItem(key, JSON.stringify(value));
}

export const retrieveItem = (key) =>
    JSON.parse(storage.getItem(key));