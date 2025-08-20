import { useSuspenseQuery, } from "@tanstack/react-query"
import { useLocation, useParams } from "react-router"
import { getUser } from "../../../services/user.service"
import { useUserAuth } from "../../../stores/user/user-auth.store"
import { useSearch } from "../../../hooks/use-search.hook"
import { Character } from "../../../interfaces/domains/character.interface"

export const useUserPage = () => {
    const { token, updateUser, payload  } = useUserAuth()
    const { idUser, idCharacter } = useParams()
    const { pathname } = useLocation()

    const handlerGetUser = async () => {
        const newUser = await getUser({
            token: token!,
            id: getUserId()
        })

        if(newUser && payload()!.id === newUser.id) {
            updateUser(newUser!)
        } 

        return newUser
    }

    const getUserId = () => {
        if(!idUser) return payload()!.id

        return Number(idUser)
    }

    const { data: user } = useSuspenseQuery({
        queryKey: ["user", Number(idUser)],
        queryFn: () => handlerGetUser()
    })

    const { filter, setSearch } = useSearch<Character>(user!.characters, "name")

    return {
        idCharacter,
        user,
        characters: filter,
        setCharacters: setSearch,
        pathname
    }
}