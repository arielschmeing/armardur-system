export const validations = {
    email: (value: string) => {
        if(!value) {
            return "(Email obrigatório)"
        }
    },

    password: (value: string) => {
        if(!value) {
            return "(Senha obrigatória)"
        }
    }
}

export interface LoginUser {
    email: string,
    password: string,
}