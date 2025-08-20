import { useSuspenseQuery } from "@tanstack/react-query"
import { useUserAuth } from "../../../stores/user/user-auth.store"
import { useSearch } from "../../../hooks/use-search.hook"
import { getSkills } from "../../../services/skill.service"

export const useSkills = () => {
    const { token } = useUserAuth()
    const { data: skills } = useSuspenseQuery({
        queryKey: ["skills"],
        queryFn: () => getSkills({ token: token! })
    })

    const { filter, setSearch } = useSearch(skills, "name")

    return {
        skills: filter,
        setSkills: setSearch
    }
}