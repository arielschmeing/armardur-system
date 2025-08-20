import { create } from "zustand"
import { Skill } from "../../interfaces/domains/skill.interface"
import { SetValue } from "../../types/set-value.type"

interface CreateSkillData {
    skill: Skill | null
    submit?: () => Skill | undefined
    setValue?: (...[key, value]: SetValue<Skill>) => void
}

export const useCreateSkillData = create<CreateSkillData>((set, get) => {
    return {
        skill: null,
        submit: undefined,
        setValue: (...[key, value]: SetValue<Skill>) => {
            set({ skill: { ...get().skill!, [key]: value } })
        }
    }
})