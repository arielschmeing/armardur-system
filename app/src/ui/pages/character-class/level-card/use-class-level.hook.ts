import { useEffect, useState } from "react"
import { useUserAuth } from "../../../../stores/user-auth.store"
import { useSelectedClass } from "../../../../stores/selected-class.store"
import { ClassLevel } from "../../../../interfaces/domains/class-level.interface"
import { useMutation } from "@tanstack/react-query"
import { deleteSkillInClassLevel, putSkillInClassLevel } from "../../../../services/character-class.service"
import { queryClient } from "../../../../main"
import { CharacterClass } from "../../../../interfaces/domains/character-class.interface"
import { Skill } from "../../../../interfaces/domains/skill.interface"
import { hasModeratorPermission } from "../../../../utils/has-moderator-permission.util"

export const useClassLevel = (level: ClassLevel) => {
    const { payload, token } = useUserAuth()
    const { selectedClass, updateClass } = useSelectedClass()
    
    const [isActive, setIsActive] = useState(false)
    const [hasPermission, setHasPermission] = useState(false)
    
    const { mutateAsync: deleteSkillInClassLevelFn } = useMutation({
        mutationFn: (skillId: number) => deleteSkillInClassLevel({ 
            token: token!, 
            classId: selectedClass!.id, 
            skillId: skillId, 
            level: level.level
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["classes"]
            })
        }
    })

    useEffect(() => {
        setHasPermission(hasModeratorPermission(payload()!))
    }, [])

    const deleteSkillInLevel = async (skillId: number) => {
        await deleteSkillInClassLevelFn(skillId as number)

        const newLevels: ClassLevel[] = selectedClass!.levels.map(l =>
            level.level === l.level
            ? {...l, skills: l.skills!.filter(s => s.id !== skillId)}
            : l
        )

        const newSelectClass: CharacterClass = {
                    ...selectedClass!, 
                    levels: newLevels
                }
            
        updateClass(newSelectClass)
    }

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
        isActive,
        setIsActive,
        hasPermission,
        deleteSkillInLevel,
        addSkillInLevel
    }
}