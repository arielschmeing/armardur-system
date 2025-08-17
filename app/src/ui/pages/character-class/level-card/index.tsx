import Styles from "./styles.module.css"

import { ClassLevel } from "../../../../interfaces/domains/class-level.interface"
import { AttributeCard } from "../../../components/attribute-card"
import { Button } from "../../../components/button"
import { CardWrapper } from "../../../components/card-wrapper"
import { SkillResumeCard } from "../../../components/skill-resume-card"
import { Modal } from "../../../components/modal"
import { useClassLevel } from "./use-class-level.hook"
import { useBindSkill } from "./use-bind-skill.hook"
import { SkillsListModal } from "../../../components/skills-list-modal"

interface ClassLevelCardProps {
    classLevel: ClassLevel
}

export const ClassLevelCard = ({ classLevel }: ClassLevelCardProps) => {
    const { isActive, setIsActive, hasPermission, deleteSkillInLevel } = useClassLevel(classLevel)
    const { addSkillInLevel, selectedClass, setSkills, skills } = useBindSkill(classLevel.level)

    return (
        <CardWrapper title={`Habilidades - Nível ${classLevel.level}`} className="container__class" >
            <AttributeCard title="Bônus de Proficiência:" value={`+${classLevel.proficiency}`} />
            {hasPermission  &&
                <Button 
                    className="login__button" 
                    text="VINCULAR HABILIDADE" 
                    id="bind__skill__button"
                    onClick={() => setIsActive(true)}
                />
            }

            {classLevel.skills?.map((skill, index) => 
                <div className={Styles.container__skills} key={index}>
                    <SkillResumeCard skill={skill} >
                    {hasPermission  &&
                        <Button
                            id="delete__action"
                            className="action_button"
                            text="x"
                            onClick={() => deleteSkillInLevel(skill.id as number)}
                        />
                    }
                    </SkillResumeCard>
                </div>
            )}

            <Modal isActive={isActive} setIsActive={setIsActive} >
                <SkillsListModal 
                    onClick={(skill) => addSkillInLevel(classLevel.level, skill, selectedClass!.id)}
                    setSearch={setSkills}
                    skills={skills}
                    description="Selecione as skills que deseja adicionar à classe"
                />
            </Modal>
        </CardWrapper>
    )
}