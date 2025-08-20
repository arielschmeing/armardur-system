import { useSuspenseQuery } from "@tanstack/react-query"
import { getClass } from "../../../services/character-class.service"
import { useParams } from "react-router"
import { useUserAuth } from "../../../stores/user/user-auth.store"
import { useEffect, useState } from "react"
import { useSelectedClass } from "../../../stores/class/selected-class.store"

export const useCharacterClass = () => {
    const { id } = useParams()
    const { token } = useUserAuth()
    const { selectedClass, updateClass } = useSelectedClass()
    const [level, setLevel] = useState(1)

    const { data: characterClass } = useSuspenseQuery({
        queryKey: ["characterClass"],
        queryFn: () => getClass({ token: token!, id: Number(id) })
    })

    useEffect(() => {
        if(characterClass) updateClass(characterClass)
    }, [characterClass])

    return {
        level,
        setLevel,
        selectedClass
    }
}