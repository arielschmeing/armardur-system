import { useSuspenseQuery } from "@tanstack/react-query"
import { useUserAuth } from "../../../../stores/user/user-auth.store"
import { getUsers } from "../../../../services/user.service"
import { useSearch } from "../../../../hooks/use-search.hook"

export const useSearchUsers = () => {
    const { token } = useUserAuth()
    const { data: users } = useSuspenseQuery({
        queryKey: ["users"],
        queryFn: () => getUsers(token!)
    })

    const { filter, setSearch } = useSearch(users, "name")
    
    return {
        users: filter,
        setSearch
    }
}