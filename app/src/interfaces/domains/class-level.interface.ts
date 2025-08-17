import { CharacterClass } from "./character-class.interface"
import { Skill } from "./skill.interface"

export interface ClassLevel {
    id: number
    level: number
    proficiency: number
    characterClass?: CharacterClass
    skills?: Skill[]
}