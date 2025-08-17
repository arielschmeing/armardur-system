import { Character } from "../interfaces/domains/character.interface";
import { modAttribute } from "./mod-attribute.util";

export const getAttributes = (character: Character | undefined) => {
    if(!character) return []
    
    const attributes = [
        {
            name: "Sabedoria",
            value: "wisdom"
        },
        {
            name: "Carisma",
            value: "charisma"
        },
        {
            name: "Constituição",
            value: "constitution"
        },
        {
            name: "Destreza",
            value: "dexterity"
        },
        {
            name: "Elemental",
            value: "elemental"
        },
        {
            name: "Mental",
            value: "mental"
        },
        {
            name: "Força",
            value: "strength"
        }
    ]

    return attributes.map(({ name, value }) => ({
        name,
        value: character[value as keyof Character],
        modifier: modAttribute(character[value as Extract<Character, number>])
    }))
}