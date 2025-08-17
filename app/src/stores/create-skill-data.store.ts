import { create } from "zustand"
import { Skill } from "../interfaces/domains/skill.interface"

interface CreateSkillData {
    skill: Skill | null
    submit?: () => Skill | undefined
    setValue?: (key: keyof Skill, value: string | number | string[] | undefined) => void
}

export const useCreateSkillData = create<CreateSkillData>(() => {
    return {
        skill: null,
        submit: undefined,
        setValue: undefined
    }
})