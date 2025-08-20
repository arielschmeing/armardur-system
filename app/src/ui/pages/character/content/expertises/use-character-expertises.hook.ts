import { useState } from "react"
import { useUserAuth } from "../../../../../stores/user/user-auth.store"
import { deleteExpertiseInCharacter } from "../../../../../services/character.service"
import { useSelectedCharacter } from "../../../../../stores/character/selected-character.store"
import { useCharacterNavigate } from "../../../../../stores/character/character-navigate.store"

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