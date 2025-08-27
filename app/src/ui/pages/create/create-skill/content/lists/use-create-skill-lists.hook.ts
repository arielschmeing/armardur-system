import { Skill } from "../../../../../../interfaces/domains/skill.interface"

interface AddList {
    item: string, 
    checked: boolean, 
    list: "branches" | "elements"
}

interface CreateSkillLists {
    skill: Skill | null
    setValue: (key: keyof Skill, value: string | number | string[] | undefined) => void
}

export const useCreateSkillLists = ({ skill, setValue }: CreateSkillLists ) => {
    const handlerAddList = ({ item, checked, list }: AddList) => {
        if(checked) {
            setValue(list, [...skill?.[list] ?? [], item])
            return
        }

        setValue(list, skill?.[list]?.filter(b => b !== item))
    }
    
    return {
        handlerAddList
    }
}