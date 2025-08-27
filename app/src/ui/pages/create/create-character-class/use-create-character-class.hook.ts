import { useEffect } from "react"
import { CharacterClass } from "../../../../interfaces/domains/character-class.interface"
import { useForm } from "../../../../hooks/use-form.hook"
import { validations } from "../../../../interfaces/validations/character-class.validations"
import { useCreateClassStep } from "../../../../stores/class/create-class-step.store"
import { useCreateClassData } from "../../../../stores/class/create-class-data.store"

export const useCreateCharacterClass = () => {
    const { data, submit } = useForm<CharacterClass>({ validations })
    const { step } = useCreateClassStep()
    
    useEffect(() => {
        useCreateClassData.setState({
            characterClass: data,
            submit
        })
    }, [])

    return {
        step
    }
}