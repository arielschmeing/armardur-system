import axios from "axios"
import { API_URL } from "../constants/api-url"
import { Skill } from "../interfaces/domains/skill.interface"

const CONTROLLER = "skills"

const cacheGetSkills = new Map<string, Skill[]>()

export const postSkill = async ({ token, request }: {request: Skill | null, token: string}) => {
    const { status } = await axios.post(`${API_URL}/${CONTROLLER}`, request,
        { headers: {"Authorization": `Bearer ${token}`} })
    
    return status === 201
}

export const getSkills = async ({ token }: {token: string}) => {
    if(cacheGetSkills.has(token)) return cacheGetSkills.get(token)!

    const { data } = await axios.get<Skill[]>(`${API_URL}/${CONTROLLER}`,
        { headers: {"Authorization": `Bearer ${token}`} })

    if(!data) return []

    cacheGetSkills.set(token, data)
    return data
}