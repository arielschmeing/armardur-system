import { useSuspenseQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { getCharacter } from "../../../services/character.service"
import { useUserAuth } from "../../../stores/user-auth.store"
import { useSelectedCharacter } from "../../../stores/selected-character.store"
import { useEffect } from "react"
import { Attributes } from "../../../interfaces/domains/attributes.interface"

export type NavigateType = 
    "general" | 
    "attributes" | 
    "skills" | 
    "elements" | 
    "expertises" | 
    "statistics"

export const useCharacterPage = () => {
    const { token } = useUserAuth()
    const { idCharacter } = useParams()
    const { updateCharacter, selectedCharacter } = useSelectedCharacter()
    const { data } = useSuspenseQuery({
        queryKey: ["character"],
        queryFn: () => getCharacter({ 
            token: token!, 
            id: Number(idCharacter) 
        })
    })

    useEffect(() => {
        if(!data) return

        updateCharacter({
            ...data,
            expertises: data.expertises.map(e => ({
                ...e,
                modifier: e.modifier.toLowerCase() as keyof Attributes
            }))
        })
    }, [data])

    return {
        character: selectedCharacter
    }
}