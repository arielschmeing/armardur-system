import { Character } from "./character.interface"

export interface User {
    id: number
    name: string
    email: string
    createdAt: Date
    characters: Character[]
}