import { clearUserData, setUserData } from '../util.js'
import * as api from './api.js'


export async function login(email, password) {

    const result = await api.post('/users/login', { email, password })
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    }
    setUserData(userData)
    return result
}

export async function register(email, password) {
    const result = await api.post('/users/register', {email, password})
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    }
    setUserData(userData)
    return result
}

export async function logout() {
   api.get('/users/logout')
    clearUserData()
}