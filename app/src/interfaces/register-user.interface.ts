import { LoginUser } from "./login-user.interface"

export interface RegisterUser extends LoginUser {
    name: string
    passwordConfirmation: string
}