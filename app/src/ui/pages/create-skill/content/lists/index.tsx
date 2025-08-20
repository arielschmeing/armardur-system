import Styles from "./styles.module.css"

import { Checkbox } from "../../../../components/checkbox"
import { Branch } from "../../../../../enums/branch.enum"
import { ELEMENTS } from "../../../../../constants/elements"
import { CreateSkillContentCard } from "../card"
import { useCreateSkillLists } from "./use-create-skill-lists.hook"
import { useCreateSkillData } from "../../../../../stores/skill/create-skill-data.store"

export const CreateSkillContentLists = () => {
    const { skill, setValue } = useCreateSkillData()
    
    if(!setValue) return null

    const { handlerAddList } = useCreateSkillLists({ skill, setValue })
    
    return (
        <CreateSkillContentCard part="lists">
            <div className={Styles.input__container}>
                <p><strong>Ramificações:</strong></p>
                <div>
                {Object.keys(Branch).map(branch =>
                    <Checkbox 
                        className="switch__checkbox"
                        name={branch}
                        text={branch}
                        key={branch}
                        type="checkbox"
                        defaultChecked={skill?.branches?.some(b => b === branch)}
                        onChange={(e) => handlerAddList({
                            item: branch,
                            checked: e.target.checked,
                            list: "branches"
                        })}
                    />
                )}
                </div>
            </div>

            <div className={Styles.input__container}>
                <p><strong>Elementos:</strong></p>
                <div>
                {Object.keys(ELEMENTS).map(element =>
                    <Checkbox 
                        className="switch__checkbox"
                        name={element}
                        text={element}
                        key={element}
                        type="checkbox"
                        defaultChecked={skill?.elements?.some(e => e === element)}
                        onChange={(e) => handlerAddList({
                            item: element,
                            checked: e.target.checked,
                            list: "elements"
                        })}
                    />
                )}
                </div>
            </div>
        </CreateSkillContentCard>
    )
}