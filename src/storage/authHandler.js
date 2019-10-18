import {
    storeItem,
    retrieveItem
} from './storageHandler';

export const getUser = () => retrieveItem("user/user");


export const storeUser = (userData) => {
    storeItem("user/user", userData);
}