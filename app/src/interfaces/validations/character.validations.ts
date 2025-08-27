export const validations = {
    race: (value: string) => {
        if(!value) {
            return "(Raça obrigatória)"
        }
    },

    classId: (value: number) => {
        if(!value) {
            return "(Classe obrigatória)"
        }
    },
    
    image: (value: string) => {
        if(!value) {
            return "(Imagem obrigatória)"
        }
    },

    name: (value: string) => {
        if(!value) {
            return "(Nome obrigatório)"
        }
    },

    hp: (value: number) => {
        if(!value) {
            return "(HP obrigatória)"
        }
    },

    strength: (value: number) => {
        if(!value) {
            return "(Força obrigatória)"
        }
    },

    dexterity: (value: number) => {
        if(!value) {
            return "(Destreza obrigatória)"
        }
    },

    constitution: (value: number) => {
        if(!value) {
            return "(Constituição obrigatória)"
        }
    },

    mental: (value: number) => {
        if(!value) {
            return "(Mental obrigatório)"
        }
    },

    wisdom: (value: number) => {
        if(!value) {
            return "(Sabedoria obrigatória)"
        }
    },

    charisma: (value: number) => {
        if(!value) {
            return "(Carisma obrigatório)"
        }
    },

    elemental: (value: number) => {
        if(!value) {
            return "(Elemental obrigatório)"
        }
    }
}