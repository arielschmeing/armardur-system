import { useEffect } from "react"
import { useCreateSkillData } from "../../../stores/skill/create-skill-data.store"
import { useForm } from "../../../hooks/use-form.hook"
import { Skill, validations } from "../../../interfaces/domains/skill.interface"
import { useCreateSkillStep } from "../../../stores/skill/create-skill-step.store"

export const useCreateSkill = () => {
    const { data, errors, setValue, submit } = useForm<Skill>({ validations })
    const { skill } = useCreateSkillData()
    const { step } = useCreateSkillStep()

    useEffect(() => {
        useCreateSkillData.setState({
            skill: data ,
            submit
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