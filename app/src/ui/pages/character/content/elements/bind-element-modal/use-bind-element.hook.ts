import { useState } from "react"
import { ELEMENTS } from "../../../../../../constants/elements"
import { putElementInCharacter } from "../../../../../../services/character.service"
import { useUserAuth } from "../../../../../../stores/user/user-auth.store"
import { CharacterElement } from "../../../../../../interfaces/domains/character-element.interface"
import { useMutation } from "@tanstack/react-query"
import { useSelectedCharacter } from "../../../../../../stores/character/selected-character.store"

export const useBindElement = () => {
    const [selectElement, setSelectElement] = useState<string | null>(null)

    const { token } = useUserAuth()
    const { selectedCharacter: character, updateCharacter } = useSelectedCharacter()
    const { mutateAsync: putElementInCharacterFn } = useMutation({
        mutationFn: putElementInCharacter
    })

    const handlerAddElement = async () => {
        if(!selectElement) return

        const response = await putElementInCharacterFn({
            characterId: character!.id,
            token: token!,
            name: selectElement
        })

        if(!response) return

        const newElement: CharacterElement = {
            name: selectElement,
            affinity: elements().find(e => e[0] === selectElement) ? false : true
        }

        updateCharacter({
            ...character!,
            elements: [...character!.elements, newElement]
        })
    }

    const elements = () => {
        return Object.entries(ELEMENTS)
    }

    return {
        selectElement,
        setSelectElement,
        elements,
        handlerAddElement
    }
}