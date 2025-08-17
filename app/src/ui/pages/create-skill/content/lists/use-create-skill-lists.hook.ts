import { CreateSkillChildrenProps } from "../../../../../interfaces/create-skill-children-props.interface"

interface AddList {
    item: string, 
    checked: boolean, 
    list: "branches" | "elements"
}

export const useCreateSkillLists = ({ skill, setValue }: CreateSkillChildrenProps ) => {
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