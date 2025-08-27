import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { useUserAuth } from "../../../../../../stores/user/user-auth.store"
import { useCreateCharacterData } from "../../../../../../stores/character/create-character-data.store"
import { postCharacter } from "../../../../../../services/character.service"

export const useCreateCharacterActions = () => {
    const navigate = useNavigate()
    
    const { token } = useUserAuth()
    const { submit, character } = useCreateCharacterData()
    const { mutateAsync: postCharacterFn } = useMutation({
        mutationFn: () => postCharacter({
            body: character!,
            classId: 1,
            token: token!
        }),
        onSuccess: () => navigate("/user")
    })

    const handlerSubmitCharacter =  () => {
        if(!submit || !submit()) return
        
        postCharacterFn()
    }

    return {
        handlerSubmitCharacter
    }
}