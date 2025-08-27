import { useSuspenseQuery } from "@tanstack/react-query"
import { useUserAuth } from "../../../../../../stores/user/user-auth.store"
import { useCreateCharacterData } from "../../../../../../stores/character/create-character-data.store"
import { getClasses } from "../../../../../../services/character-class.service"

export const useCreateCharacterResume = () => {
    const { token } = useUserAuth()
    const { setValue } = useCreateCharacterData()
    const { data: classes } = useSuspenseQuery({
        queryKey: ["classes"],
        queryFn: () => getClasses({
            token: token!
        })
    })
    
    const setClass = (className: string) => {
        if(!setValue) return
        
        setValue("classId", className)
    }

    return {
        classes: classes.map(c => c.name),
        setValue,
        setClass
    }
}