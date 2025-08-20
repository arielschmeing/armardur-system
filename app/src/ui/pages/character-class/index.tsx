import { PageWrapper } from "../../components/page-wrapper"

import { useCharacterClass } from "./use-character-class.hook"
import { ClassAttributeCard } from "../../components/class-attributes-card"
import { ClassHeader } from "./header"
import { ClassLevelSelect } from "./level-select"
import { ClassLevelCard } from "./level-card"
import { useSelectedClass } from "../../../stores/class/selected-class.store"


export const CharacterClassPage = () => {
    const { selectedClass, level, setLevel } = useCharacterClass()
    const { selectedClass: characterClass } = useSelectedClass()

    if(!selectedClass) return null
    
    return (
        <PageWrapper hasSuspense>
            <ClassHeader />
            <ClassAttributeCard />

            <ClassLevelSelect
                level={level}
                setLevel={setLevel} 
            />

            <ClassLevelCard 
                classLevel={characterClass!.levels[level - 1]} 
            />
        </PageWrapper>
    )
}

