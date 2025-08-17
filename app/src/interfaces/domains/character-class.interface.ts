import { ClassLevel } from "./class-level.interface"

export interface CharacterClass {
    id: number
    difficultClass: number
    name: string
    description: string
    dieHealth: number
    baseHealth: number
    physicalMod: string
    casterMod: string
    levels: ClassLevel[]
}