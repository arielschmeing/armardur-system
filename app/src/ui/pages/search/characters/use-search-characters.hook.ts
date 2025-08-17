import { useSuspenseQuery } from "@tanstack/react-query"
import { getCharacters } from "../../../../services/character.service"
import { useUserAuth } from "../../../../stores/user-auth.store"
import { useSearch } from "../../../../hooks/use-search.hook"

export const useSearchCharacters = () => {
    const { token } = useUserAuth()
    const { data: characters } = useSuspenseQuery({
        queryKey: ["characters"],
        queryFn: () => getCharacters(token!)
    })
    
    const { filter, setSearch } = useSearch(characters, "name")

    return {
        characters: filter,
        setSearch
    }
}