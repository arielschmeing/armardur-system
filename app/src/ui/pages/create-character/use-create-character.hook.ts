import { useNavigate, useParams } from "react-router"
import { useUserAuth } from "../../../stores/user/user-auth.store"
import { useEffect } from "react"
import { useForm } from "../../../hooks/use-form.hook"
import { Character, validations } from "../../../interfaces/domains/character.interface"
import { useCreateCharacterData } from "../../../stores/character/create-character-data.store"

export const useCreateCharacter = () => {
    const { data, setValue, submit } = useForm<Character>({ validations })
    const { payload } = useUserAuth()
    const { idUser } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(idUser !== payload()?.id) {
            navigate(`/user/${payload()?.id}/character/create`)
        }

        useCreateCharacterData.setState({
            character: data,
            setValue,
            submit
        }) 
    }, [])
}