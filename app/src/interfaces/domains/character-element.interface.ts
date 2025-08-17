import { Character } from "./character.interface"

export interface CharacterElement {
    id?: number
    name: string
    character?: Character
    affinity: boolean
}