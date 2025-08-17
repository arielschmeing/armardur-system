import { useSuspenseQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useSelectedClass } from "../../../../stores/selected-class.store"
import { Skill } from "../../../../interfaces/domains/skill.interface"
import { useUserAuth } from "../../../../stores/user-auth.store"
import { getSkills } from "../../../../services/skill.service"
import { useSearch } from "../../../../hooks/use-search.hook"
import { putSkillInClassLevel } from "../../../../services/character-class.service"
import { ClassLevel } from "../../../../interfaces/domains/class-level.interface"
import { CharacterClass } from "../../../../interfaces/domains/character-class.interface"

export const useBindSkill = (level: number) => {
    const [newSkills, setNewSkills] = useState<Skill[]>([])
    const { selectedClass, updateClass } = useSelectedClass()
    const { token } = useUserAuth()
    const { data: skills  } = useSuspenseQuery({
        queryKey: ["skills"],
        queryFn: () => getSkills({ token: token! })
    })
    const { filter, setSearch } = useSearch(skills!, "name")

    useEffect(() => {
        const filterSkills = filter?.filter(s => 
            !selectedClass?.levels?.find(l => 
                l.level === level)?.skills?.some(ss => 
                    ss.id === s.id)
        )
        setNewSkills(filterSkills)
    }, [filter, selectedClass])

    const addSkillInLevel = async (level: number, skill: Skill, classId: number) => {
        await putSkillInClassLevel({
            classId,
            level: level,
            skillId: skill.id as number,
            token: token!
        })

        const newLevels: ClassLevel[] = selectedClass!.levels.map((l, index) => 
            index === level - 1
            ? {...l, skills: [...l.skills!, skill]}
            : l
        )

        const newSelectClass: CharacterClass = {
            ...selectedClass!, 
            levels: newLevels
        }
        
        updateClass(newSelectClass)
    }

    return {
        skills: newSkills,
        setSkills: setSearch,
        addSkillInLevel,
        selectedClass
    }
}