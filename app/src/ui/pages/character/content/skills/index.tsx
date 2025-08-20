import { SkillResumeCard } from "../../../../components/skill-resume-card"
import { Button } from "../../../../components/button"
import { Modal } from "../../../../components/modal"
import { useCharacterSkills } from "./use-character-skills.hook"
import { SkillsListModal } from "../../../../components/skills-list-modal"
import { useBindCharacterSkill } from "./use-bind-character-skill.hook"
import { ContentCard } from "../card"
import { useSelectedCharacter } from "../../../../../stores/character/selected-character.store"

export const CharacterContentSkills = () => {
    const { isActive, navigate, setIsActive, setSearch, skills  } = useCharacterSkills()
    const { addSkillInCharacter, deleteCharacterSkill } = useBindCharacterSkill()
    const { selectedCharacter: character } = useSelectedCharacter()

    if(navigate !== "skills" || !character) return null

    return (
        <ContentCard
            title="HABILIDADES:"
            description="Adicione uma habilidade ao seu personagem..."
            attribute="skills"
            setIsActive={setIsActive}
        >
        {character.skills.map((skill) =>
            <SkillResumeCard  
                skill={skill}
                key={skill.name}
            >
                <Button
                    id="delete__action"
                    className="action_button"
                    text="x"
                    onClick={() => deleteCharacterSkill({ skillId: skill.id! })}
                />
            </SkillResumeCard>
        )}
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <SkillsListModal 
                    onClick={(skill) => addSkillInCharacter({ skillId: skill.id!, skill })}
                    setSearch={setSearch}
                    skills={skills} 
                    description="Selecione as skills que deseja adicionar ao personagem"
                />
            </Modal>
        </ContentCard>
    )
}