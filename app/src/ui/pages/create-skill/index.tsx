import Styles from "./styles.module.css"

import { PageWrapper } from "../../components/page-wrapper"
import { CreateSkillContentResume } from "./content/resume"
import { CreateSkillContentStatus } from "./content/status"
import { CreateSkillContentLists } from "./content/lists"
import { useCreateSkill } from "./use-create-skill.hook"
import { Button } from "../../components/button"
import { useState } from "react"
import { SkillCard } from "../../components/skill-card"

export const CreateSkillPage = () => {
    const { skill, setValue, step } = useCreateSkill()
    const [isViewing, setIsViewing] = useState(false)
    
    return (
        <PageWrapper>
            <h1 className={Styles.title}>CRIAÇÃO DE HABILIDADES</h1>

            <div className={Styles.container__progress}>
                <p id={step === "resume" ? Styles.check : ""}>1</p>
                <p id={step === "status" ? Styles.check : ""}>2</p>
                <p id={step === "lists" ? Styles.check : ""}>3</p>
            </div>

            <CreateSkillContentResume
                skill={skill} 
                setValue={setValue}
            />
            <CreateSkillContentStatus 
                skill={skill} 
                setValue={setValue}
            />
            <CreateSkillContentLists 
                skill={skill}
                setValue={setValue}
            />

            {step === "lists" &&
                <Button 
                    className="login__button"
                    text={isViewing ? "VER MENOS" : "VISUALIZAR"}
                    id="view__action"
                    onClick={() => setIsViewing(!isViewing)}
                />
            }

            {isViewing && skill && step === "lists" &&
                <SkillCard skill={skill} />
            }
        </PageWrapper>
    )
}