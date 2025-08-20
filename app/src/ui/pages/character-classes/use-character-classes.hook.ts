import { useUserAuth } from "../../../stores/user/user-auth.store"
import { getClasses } from "../../../services/character-class.service"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useSearch } from "../../../hooks/use-search.hook"

export const useCharacterClasses = () => {
    const { token } = useUserAuth()
    const { data: classes } = useSuspenseQuery({ 
        queryKey: ["classes"],
        queryFn: () => getClasses({ token: token! })
    })
    
    const { filter, setSearch } = useSearch(classes, "name")

    return {
        classes : filter,
        setClasses: setSearch
    }
}