import { useEffect } from "react"
import { useCreateCharacterData } from "../../../../../../stores/character/create-character-data.store"
import { Attribute } from "../../../../../../enums/attribute.enum"
import { CharacterRequestBody } from "../../../../../../interfaces/requests/character-request-body.interface"

const MIN_HP = 1
const MAX_HP = 99
const DEFAULT_HP = 12

const MIN_ATTRIBUTE = 1
const MAX_ATTRIBUTE = 20
const DEFAULT_ATTRIBUTE = 11

export const useCreateCharacterStatus = () => {
    const { setValue, character } = useCreateCharacterData()
    
    const attributes = Object.values(Attribute).map(a => 
        a.toLowerCase() as keyof CharacterRequestBody)

    useEffect(() => {
        console.log(character)
    }, [character])

    return {
        MIN_HP,
        MAX_HP,
        DEFAULT_HP,
        MIN_ATTRIBUTE,
        MAX_ATTRIBUTE,
        DEFAULT_ATTRIBUTE,
        setValue,
        character,
        attributes
    }
}