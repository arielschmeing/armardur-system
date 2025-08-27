import { useEffect } from "react"
import { useCreateSkillData } from "../../../../stores/skill/create-skill-data.store"
import { useForm } from "../../../../hooks/use-form.hook"
import { Skill } from "../../../../interfaces/domains/skill.interface"
import { useCreateSkillStep } from "../../../../stores/skill/create-skill-step.store"
import { validations } from "../../../../interfaces/validations/skill.validations"

export const useCreateSkill = () => {
    const { data, errors, setValue, submit } = useForm<Skill>({ validations })
    const { skill } = useCreateSkillData()
    const { step } = useCreateSkillStep()

    useEffect(() => {
        useCreateSkillData.setState({
            skill: data ,
            submit
        })
    }, [data])

    return {
        skill,
        step,
        errors,
        setValue,
        submit
    }
}