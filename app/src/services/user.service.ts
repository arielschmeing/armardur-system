import axios from "axios"
import { API_URL } from "../constants/api-url"
import { LoginResponse } from "../interfaces/login-response.interface"
import { RegisterUser } from "../interfaces/register-user.interface"
import { LoginUser } from "../interfaces/login-user.interface"
import { IdRequest } from "../interfaces/requests/id-request.interface"
import { User } from "../interfaces/domains/user.interface"

const CONTROLLER = "users"

export const loginUser = async ({ email, password }: LoginUser) => {
    const response = await axios.post<LoginResponse>(`${API_URL}/${CONTROLLER}/login`,
        { email, password })

    if(response.status === 200) return response.data

    return null
}

const cacheGetUsers = new Map<string, User[]>()

export const getUsers = async (token: string) => {
    if(cacheGetUsers.has(token)) return cacheGetUsers.get(token)!

    const { data } = await axios.get<User[]>(`${API_URL}/${CONTROLLER}`,
        { headers: { "Authorization": `Bearer ${token}` } })
    
    if(!data) return []

    cacheGetUsers.set(token, data)

    return data
}

const cacheGetUser = new Map<string, User>()

export const getUser = async ({ token, id }: IdRequest) => {
    const CACHE_KEY = `${token}:${id}`

    if(cacheGetUser.has(CACHE_KEY)) return cacheGetUser.get(CACHE_KEY)!

    const { data } = await axios.get<User>(`${API_URL}/${CONTROLLER}/${id}`,
        { headers: {"Authorization": `Bearer ${token}`} })

    if(!data) return

    cacheGetUser.set(CACHE_KEY, data)
    return data
}

export const postUser = async ({ email, name, password }: RegisterUser) => {
    const { status } = await axios.post(`${API_URL}/${CONTROLLER}`,
        { email, name, password })

    if(status === 201) return true
}