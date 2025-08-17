import { Attributes } from "./attributes.interface"
import { CharacterClass } from "./character-class.interface"
import { CharacterElement } from "./character-element.interface"
import { Expertise } from "./expertise.interface"
import { Skill } from "./skill.interface"

export interface Character extends Attributes {
    id: number
    race: string
    image: string
    name: string
    hp: number
    level: number
    armorClass: number
    userId: number
    characterClass: CharacterClass
    expertises: Expertise[]
    elements: CharacterElement[]
    skills: Skill[]
}