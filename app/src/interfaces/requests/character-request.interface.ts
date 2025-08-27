import { CharacterRequestBody } from "./character-request-body.interface"

export interface CharacterRequest {
    body: CharacterRequestBody
    token: string
    classId: number
}