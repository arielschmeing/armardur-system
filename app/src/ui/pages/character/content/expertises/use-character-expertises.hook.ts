import { useState } from "react"
import { useCharacterNavigate } from "../../../../../stores/character-navigate.store"
import { useSelectedCharacter } from "../../../../../stores/selected-character.store"
import { useUserAuth } from "../../../../../stores/user-auth.store"
import { deleteExpertiseInCharacter } from "../../../../../services/character.service"

export const useCharacterExpertises = () => {
    const [isActive, setIsActive] = useState(false)

    const { selectedCharacter: character, updateCharacter } = useSelectedCharacter()
    const { navigate } = useCharacterNavigate()
    const { token } = useUserAuth()
    
    const removeExpertise = async (expertise: string) => {
        const response = await deleteExpertiseInCharacter({
            token: token!,
            characterId: character!.id,
            name: expertise
        })

        if(!response) return

        updateCharacter({
            ...character!,
            expertises: [...character!.expertises.filter(e => e.name !== expertise)]
        })
    }

    return {
        character,
        navigate,
        isActive,
        setIsActive,
        removeExpertise
    }
}