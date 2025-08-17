export const validations = {
    name: (value: string) => {
        if(!value) {
            return "(Nome obrigatório)"
        }
    },
    
    description: (value: string) => {
        if(!value) {
            return "(Sobre obrigatório)"
        }
    },

    branches: (value: string[]) => {
        if(!value) {
            return "(Selecione pelo menos uma ramificação)"
        }
    }
}

export interface Skill {
    id?: number
    name: string
    level?: number
    range?: number
    duration?: number
    castTime?: number
    description: string
    branches: string[]
    elements?: string[]
}