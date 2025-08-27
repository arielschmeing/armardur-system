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