import { Skill } from "./domains/skill.interface"

export interface CreateSkillChildrenProps {
    skill: Skill | null
    setValue: (key: keyof Skill, value: string | number | string[] | undefined) => void
}