import { ClassLevel } from "./class-level.interface"

export const validations = {
    difficultClass: (value: number) => {
        if (value === undefined || value === null || value < 0) {
            return "(Dificuldade obrigatória)"
        }
    },

    name: (value: string) => {
        if (!value) {
            return "(Nome obrigatório)"
        }
    },

    description: (value: string) => {
        if (!value) {
            return "(Sobre obrigatório)"
        }
    },

    dieHealth: (value: number) => {
        if (value === undefined || value === null || value <= 0) {
            return "(Dado de vida obrigatório)"
        }
    },

    baseHealth: (value: number) => {
        if (value === undefined || value === null || value < 0) {
            return "(Vida base obrigatória)"
        }
    },

    physicalMod: (value: string) => {
        if (!value) {
            return "(Modificador físico obrigatório)"
        }
    },

    casterMod: (value: string) => {
        if (!value) {
            return "(Modificador mágico obrigatório)"
        }
    }
}

export interface CharacterClass {
    id?: number
    difficultClass: number
    name: string
    description: string
    dieHealth: number
    baseHealth: number
    physicalMod: string
    casterMod: string
    levels?: ClassLevel[]
}