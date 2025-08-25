import { useCreateCharacterData } from "../../../../../stores/character/create-character-data.store"

const MIN_HP = 1
const MAX_HP = 99
const DEFAULT_HP = 12

const MIN_ATTRIBUTE = 1
const MAX_ATTRIBUTE = 20
const DEFAULT_ATTRIBUTE = 11

export const useCreateCharacterStatus = () => {
    const { setValue } = useCreateCharacterData()
    
    return {
        MIN_HP,
        MAX_HP,
        DEFAULT_HP,
        MIN_ATTRIBUTE,
        MAX_ATTRIBUTE,
        DEFAULT_ATTRIBUTE,
        setValue
    }
}