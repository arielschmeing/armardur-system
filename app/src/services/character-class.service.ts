import axios from "axios"
import { API_URL } from "../constants/api-url"
import { SkillInClassLevelRequest } from "../interfaces/requests/skill-in-class-level-request.interface"
import { IdRequest } from "../interfaces/requests/id-request.interface"
import { CharacterClass } from "../interfaces/domains/character-class.interface"

const CONTROLLER = "classes"

const cacheGetClasses = new Map<string, CharacterClass[]>()

export const getClasses = async ({ token }: {token: string}) => {
    if(cacheGetClasses.has(token)) return cacheGetClasses.get(token)!
    
    const { data } = await axios.get<CharacterClass[]>(`${API_URL}/${CONTROLLER}`, 
        { headers: { "Authorization": `Bearer ${token}` }
    })

    if(!data) return []
    
    cacheGetClasses.set(token, data)
    
    return data
}

const cacheGetClass = new Map<string, CharacterClass>()

export const getClass = async ({ token, id }: IdRequest) => {
    const CACHE_KEY = `${token}:${id}`

    if(cacheGetClass.has(CACHE_KEY)) return cacheGetClass.get(CACHE_KEY)

    const { data } = await axios.get<CharacterClass>(`${API_URL}/${CONTROLLER}/${id}`,
        { headers: { "Authorization": `Bearer ${token}` } }
    )

    cacheGetClass.set(CACHE_KEY, data)
    return data
}

export const postClass = async ({ token, request }: {token: string, request: CharacterClass | null}) => {
    const { status } = await axios.post(`${API_URL}/${CONTROLLER}`, 
        request, 
        { headers: { "Authorization": `Bearer ${token}` } })

    return status === 201
}

export const putSkillInClassLevel = async ({ token, classId, skillId, level }: SkillInClassLevelRequest) => {
    await axios.put(`${API_URL}/${CONTROLLER}/${classId}/level/${level}/skill/${skillId}`,
        null,
        { headers: { "Authorization": `Bearer ${token}` } })
}

export const deleteSkillInClassLevel = async ({ token, classId, skillId, level }: SkillInClassLevelRequest) => {
    await axios.delete(`${API_URL}/${CONTROLLER}/${classId}/level/${level}/skill/${skillId}`,
        { headers: { "Authorization": `Bearer ${token}` } })
}