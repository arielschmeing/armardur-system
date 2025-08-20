import { putExpertiseInCharacter } from "../../../../../../services/character.service"
import { useUserAuth } from "../../../../../../stores/user/user-auth.store"
import { useMutation } from "@tanstack/react-query"
import { EXPERTISES } from "../../../../../../constants/expertises"
import { useEffect, useState } from "react"
import { useSelectedCharacter } from "../../../../../../stores/character/selected-character.store"

export const useBindExpertise = () => {
    const [expertises, setExpertises] = useState(EXPERTISES)
    const { selectedCharacter: character, updateCharacter } = useSelectedCharacter()
    const { token } = useUserAuth()
    const { mutateAsync: putExpertiseInCharacterFn } = useMutation({
        mutationFn: putExpertiseInCharacter
    })

    useEffect(() => {
        setExpertises(new Map(
            [...expertises]
            .map(([key, exps]) => [key, exps
                .filter(ex => !character!.expertises
                    .some(ce => ce.name === ex))])
        ))
    }, [character])

    const handlerAddExpertise = async (newExpertise: string) => {
        const response = await putExpertiseInCharacterFn({
            token: token!,
            characterId: character!.id,
            name: newExpertise
        })

        if(!response) return

        updateCharacter({
            ...character!,
            expertises: [...character!.expertises, response]
        })
    }

    return {
        expertises,
        handlerAddExpertise
    }
}