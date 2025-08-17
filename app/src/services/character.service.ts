import axios from "axios"
import { API_URL } from "../constants/api-url"
import { SkillInCharacterRequest } from "../interfaces/requests/skill-in-character-request.interface"
import { IdRequest } from "../interfaces/requests/id-request.interface"
import { Character } from "../interfaces/domains/character.interface"
import { ElementInCharacterRequest } from "../interfaces/requests/element-in-character-request.interface"
import { ExpertiseInCharacterRequest } from "../interfaces/requests/expertise-in-character-request.interface"
import { Expertise } from "../interfaces/domains/expertise.interface"

const CONTROLLER = "characters"

const cacheGetUserCharacters = new Map<string, Character[]>()

export const getCharactersByUser = async ({ token, id }: IdRequest) => {
    if(cacheGetUserCharacters.has(token)) return cacheGetUserCharacters.get(token)!
    
    const { data } = await axios.get<Character[]>(`${API_URL}/${CONTROLLER}/user/${id}`, 
        { headers: { "Authorization": `Bearer ${token}` } })

    cacheGetUserCharacters.set(token, data)
    
    if(!data) return []
    
    return data
}

const cacheGetCharacters = new Map<string, Character[]>()

export const getCharacters = async (token: string) => {
    if(cacheGetCharacters.has(token)) return cacheGetCharacters.get(token)!

    const { data } = await axios.get<Character[]>(`${API_URL}/${CONTROLLER}`, 
        { headers: { "Authorization": `Bearer ${token}` } })
    
    cacheGetCharacters.set(token, data)

    if(!data) return []

    return data
}

const cacheGetCharacter = new Map<string, Character>()

export const getCharacter = async ({ token, id }: IdRequest) => {
    const CACHE_KEY = `${token}:${id}`

    if(cacheGetCharacter.has(CACHE_KEY)) return cacheGetCharacter.get(CACHE_KEY)

    const { data } = await axios.get<Character>(`${API_URL}/${CONTROLLER}/${id}`, {
        headers: { "Authorization": `Bearer ${token}` } })
    
    cacheGetCharacter.set(CACHE_KEY, data)

    return data
}

export const putSkillInCharacter = async ({ token, characterId, skillId }: SkillInCharacterRequest) => {
    const response = await axios.put(`${API_URL}/${CONTROLLER}/${characterId}/skill/${skillId}`, 
        null, 
        { headers: { "Authorization": `Bearer ${token}` } })

    if(response.status == 200) return true

    return false
}

export const deleteSkillInCharacter = async ({ token, characterId, skillId }: SkillInCharacterRequest) => {
    const response = await axios.delete(`${API_URL}/${CONTROLLER}/${characterId}/skill/${skillId}`, 
        { headers: { "Authorization": `Bearer ${token}` } })

    if(response.status === 200) return true

    return false
}

export const putElementInCharacter = async ({ token, characterId, name }: ElementInCharacterRequest) => {
    const response = await axios.put(`${API_URL}/${CONTROLLER}/${characterId}/element`, 
        { name },
        { headers: { "Authorization": `Bearer ${token}` } })

    if(response.status === 200) return true

    return false
}

export const deleteElementInCharacter = async ({ token, characterId, name }: ElementInCharacterRequest) => {
    const response = await axios.delete(`${API_URL}/${CONTROLLER}/${characterId}/element`, 
        { headers: { "Authorization": `Bearer ${token}` }, data: { name } })

    if(response.status === 200) return true

    return false
}

export const putExpertiseInCharacter = async ({ token, characterId, name }: ExpertiseInCharacterRequest) => {
    const { data } = await axios.put<Expertise>(`${API_URL}/${CONTROLLER}/${characterId}/expertise`, 
        { name }, 
        { headers: { "Authorization": `Bearer ${token}` } })

    return data
}

export const deleteExpertiseInCharacter = async ({ token, characterId, name }: ElementInCharacterRequest) => {
    const response = await axios.delete(`${API_URL}/${CONTROLLER}/${characterId}/expertise`, 
        { headers: { "Authorization": `Bearer ${token}` }, data: { name } })

    if(response.status === 200) return true

    return false
}