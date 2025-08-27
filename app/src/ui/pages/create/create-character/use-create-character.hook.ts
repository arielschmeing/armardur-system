import { useNavigate, useParams } from "react-router"
import { useForm } from "../../../../hooks/use-form.hook"
import { CharacterRequestBody } from "../../../../interfaces/requests/character-request-body.interface"
import { useUserAuth } from "../../../../stores/user/user-auth.store"
import { useEffect } from "react"
import { useCreateCharacterData } from "../../../../stores/character/create-character-data.store"
import { validations } from "../../../../interfaces/validations/character.validations"

export const useCreateCharacter = () => {
    const { data, setValue, submit } = useForm<CharacterRequestBody>({ validations })
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
    }, [data])
}