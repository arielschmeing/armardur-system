import Styles from "./styles.module.css"

import { Skill } from "../../../interfaces/domains/skill.interface"
import { Button } from "../button"
import { BoltIcon } from "../icons/bolt"
import { SearchIcon } from "../icons/search"
import { Input } from "../input"
import { SkillResumeCard } from "../skill-resume-card"

interface SkillsListModalProps {
    skills: Skill[]
    setSearch: (value: string) => void
    onClick: (skill: Skill) => void
    description: string
}

export const SkillsListModal = ({ onClick, setSearch, skills, description }: SkillsListModalProps) => {
    return (
        <section className={Styles.container}>
            <div className={Styles.header}>
                <div>
                    <BoltIcon id={Styles.icon} />

                    <div>
                        <h1>ADICIONAR SKILLS</h1>
                        <p>{description}</p>
                    </div>
                </div>
        
                <Input
                    className="login__input"
                    name="skills-search"
                    id={Styles.search__input}
                    onChange={(e) => setSearch(e.target.value)}
                >
                    <SearchIcon />
                </Input>
            </div>

            <div className={Styles.container__search}>
            </div>

            <div className={Styles.content}>
                {skills?.map((skill, index) => 
                    <SkillResumeCard skill={skill} key={index}>
                        <Button
                            className="action_button" 
                            text="+"
                            onClick={() => onClick(skill)}
                        />
                    </SkillResumeCard>
                )}
            </div>
        </section>
    )
}