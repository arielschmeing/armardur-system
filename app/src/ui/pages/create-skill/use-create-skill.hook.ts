import { useEffect } from "react"
import { useCreateSkillData } from "../../../stores/create-skill-data.store"
import { useForm } from "../../../hooks/use-form.hook"
import { Skill, validations } from "../../../interfaces/domains/skill.interface"
import { useCreateSkillStep } from "../../../stores/create-skill-step.store"

export const useCreateSkill = () => {
    const { data, errors, setValue, submit } = useForm<Skill>({ validations })
    const { skill } = useCreateSkillData()
    const { step } = useCreateSkillStep()

    useEffect(() => {
        useCreateSkillData.setState({ 
            setValue,
            submit,
            skill: data 
        })
    }, [skill, data])

    return {
        skill,
        step,
        errors,
        setValue,
        submit
    }
}