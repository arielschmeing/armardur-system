import { useQueryClient } from "@tanstack/react-query"
import { useUserAuth } from "../../../../../stores/user-auth.store"
import { Skill } from "../../../../../interfaces/domains/skill.interface"
import { deleteSkillInCharacter, putSkillInCharacter } from "../../../../../services/character.service"
import { useSelectedCharacter } from "../../../../../stores/selected-character.store"
import { Character } from "../../../../../interfaces/domains/character.interface"

export const useBindCharacterSkill =  () => {
    const { token } = useUserAuth()
    const { selectedCharacter: character, updateCharacter } = useSelectedCharacter()
    const queryClient = useQueryClient()

    const addSkillInCharacter = async ({ skillId, skill }: {skillId: number, skill: Skill}) => {
        if(!character) return
        
        const response = await putSkillInCharacter({ 
            token: token!, 
            characterId: character.id, 
            skillId: skillId
        })

        if(!response) return

        queryClient.setQueryData<Character>(["character"], (oldCharacter) => {
            if(!oldCharacter) return oldCharacter
            
            const newCharacter = {
                ...oldCharacter,
                skills: [...character.skills, skill]
            }

            updateCharacter(newCharacter)

            return newCharacter
        })
    }

    const deleteCharacterSkill = async ({ skillId }: {skillId: number}) => {
        if(!character) return
        
        const response = await deleteSkillInCharacter({ 
            token: token!,
            characterId: character.id, 
            skillId: skillId
        })

        if(!response) return

        queryClient.setQueryData<Character>(["character"], (oldCharacter) => {
            if(!oldCharacter) return oldCharacter
            
            const newCharacter = {
                ...oldCharacter,
                skills: character.skills.filter(s => s.id !== skillId)
            }

            updateCharacter(newCharacter)

            return newCharacter
        })
    }
    
    return {
        addSkillInCharacter,
        deleteCharacterSkill
    }
}