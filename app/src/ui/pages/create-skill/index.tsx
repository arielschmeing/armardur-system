import { CreateSkillContentResume } from "./content/resume"
import { CreateSkillContentStatus } from "./content/status"
import { CreateSkillContentLists } from "./content/lists"
import { useCreateSkill } from "./use-create-skill.hook"
import { Button } from "../../components/button"
import { useState } from "react"
import { SkillCard } from "../../components/skill-card"
import { CreateWrapper } from "../create/create-wrapper"

export const CreateSkillPage = () => {
    const { skill, step } = useCreateSkill()
    const [isViewing, setIsViewing] = useState(false)
    
    return (
        <CreateWrapper 
            title="CRIAÇÃO DE HABILIDADES"
            actualStep={step} 
            steps={["resume", "status", "lists"]}
        >
            <CreateSkillContentResume />
            <CreateSkillContentStatus />
            <CreateSkillContentLists />

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
        </CreateWrapper>
    )
}