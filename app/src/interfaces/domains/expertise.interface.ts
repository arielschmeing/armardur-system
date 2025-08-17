import { Attributes } from "./attributes.interface"
import { Character } from "./character.interface"

export interface Expertise {
    id: number
    character?: Character
    modifier: keyof Attributes
    name: string
}