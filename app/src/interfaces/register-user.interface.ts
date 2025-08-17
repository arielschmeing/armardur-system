import { LoginUser } from "./login-user.interface"

export const validations = {
    name: (value: string) => {
        if(!value) {
            return "(Nome obrigatório)"
        }
    },

    password: (value: string) => {
        if(!value) {
            return "(Senha obrigatória)"
        }
    },

    passwordConfirmation: (value: string) => {
        if(!value) {
            return "(Insira a senha novamente)"
        }
    },

    email: (value: string) => {
        if(!value) {
            return "(Email obrigatório)"
        }
    }
}

export interface RegisterUser extends LoginUser {
    name: string
    passwordConfirmation: string
}