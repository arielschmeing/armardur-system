import { User } from "./domains/user.interface"

export interface LoginResponse {
    accessToken: string,
    expiresIn: number
    user: User
}