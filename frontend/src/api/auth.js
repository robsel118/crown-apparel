import axios from 'axios';

export const register = (userData) => {
    axios.post("api/auth/register", {
        user: userData
    })
}

export const login = async (userData) =>
    axios.post("api/auth/login");

export const logout = () => axios.get("api/auth/logout");


export const getCurrentUser = async () => {
    const {
        data
    } = await axios.get('/auth/current')
    return data
}