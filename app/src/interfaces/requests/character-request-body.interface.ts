import { Attributes } from "react"

export interface CharacterRequestBody extends Attributes {
    name: string
    race: string
    image: string
    hp: number
    classId: number
}