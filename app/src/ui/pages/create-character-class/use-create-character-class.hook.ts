import { useEffect } from "react"
import { useForm } from "../../../hooks/use-form.hook"
import { CharacterClass, validations } from "../../../interfaces/domains/character-class.interface"
import { useCreateClassData } from "../../../stores/class/create-class-data.store"
import { useCreateClassStep } from "../../../stores/class/create-class-step.store"

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