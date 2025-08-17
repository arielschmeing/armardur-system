import { useEffect, useState } from "react"
import { useUserAuth } from "../../../../../stores/user-auth.store"
import { useCharacterNavigate } from "../../../../../stores/character-navigate.store"
import { Skill } from "../../../../../interfaces/domains/skill.interface"
import { useSearch } from "../../../../../hooks/use-search.hook"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getSkills } from "../../../../../services/skill.service"
import { useSelectedCharacter } from "../../../../../stores/selected-character.store"

export const useCharacterSkills = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [filterSkills, setFilterSkills] = useState<Skill[]>([])

    const { selectedCharacter: character } = useSelectedCharacter()
    const { token } = useUserAuth()
    const { data: skills } = useSuspenseQuery({
        queryKey: ["skills"],
        queryFn: () => getSkills({ token: token! })
    })
    const { filter, setSearch } = useSearch<Skill>(skills!, "name")
    const { navigate } = useCharacterNavigate()

    useEffect(() => {
        const filterClassSkills = skillsInClass()

        setFilterSkills(filter?.filter(s => 
            !character?.skills.some(cs => cs.id === s.id) && 
            filterClassSkills.some(cs => cs.id === s.id)))
    }, [filter, character])

    const skillsInClass = () => {
        if(!character) return []

        return character.characterClass.levels.reduce<Skill[]>((acc, level) => {
            if(level.skills) {
                acc.push(...level.skills.filter(s => 
                    !acc.find(sc => sc.id === s.id)))
            }

            return acc
        }, [])
    }

    return {
        navigate,
        isActive,
        setIsActive,
        setSearch,
        skills: filterSkills,
    }
}