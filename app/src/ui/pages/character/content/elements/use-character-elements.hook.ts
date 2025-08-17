import { useState } from "react"
import { useUserAuth } from "../../../../../stores/user-auth.store"
import { useCharacterNavigate } from "../../../../../stores/character-navigate.store"
import { useSelectedCharacter } from "../../../../../stores/selected-character.store"
import { CharacterElement } from "../../../../../interfaces/domains/character-element.interface"
import { deleteElementInCharacter } from "../../../../../services/character.service"
import { useMutation } from "@tanstack/react-query"

export const useCharacterElements = () => {
    const [isActive, setIsActive] = useState(false)

    const { navigate } = useCharacterNavigate()
    const { selectedCharacter: character, updateCharacter } = useSelectedCharacter()
    const { token } = useUserAuth()

    const { mutateAsync: deleteElementInCharacterFn } = useMutation({
        mutationFn: deleteElementInCharacter
    })

    const handlerRemoveElement = async (element: CharacterElement) => {
        if(!character?.id) return

        const response = await deleteElementInCharacterFn({
            characterId: character.id,
            token: token!,
            name: element.name
        })

        if(!response) return

        updateCharacter({
            ...character!,
            elements: character!.elements.filter(e => e.name !== element.name)
        })
    }

    return {
        navigate,
        character,
        isActive,
        setIsActive,
        handlerRemoveElement
    }
}