import { useSuspenseQuery } from "@tanstack/react-query"
import { getClasses } from "../../../../../services/character-class.service"
import { useUserAuth } from "../../../../../stores/user/user-auth.store"
import { useCreateCharacterData } from "../../../../../stores/character/create-character-data.store"

export const useCreateCharacterResume = () => {
    const { token } = useUserAuth()
    const { setValue } = useCreateCharacterData()
    const { data: classes } = useSuspenseQuery({
        queryKey: ["classes"],
        queryFn: () => getClasses({
            token: token!
        })
    })
    
    return {
        classes: classes.map(c => c.name),
        setValue
    }
}