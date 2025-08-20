import Styles from "./styles.module.css"

import { Badge } from "../../../components/badge"
import { Tag } from "../../../components/tag"
import { SwordsIcon } from "../../../components/icons/swords"
import { useSelectedClass } from "../../../../stores/class/selected-class.store"

export const ClassHeader = () => {
    const { selectedClass: characterClass } = useSelectedClass()

    return (
        <section className={Styles.container}>
            <div className={Styles.header}>
                <div className={Styles.container__icon}>
                    <SwordsIcon />
                </div>

                <div>
                    <h1>{characterClass!.name}</h1>

                    <div className={Styles.container__badges}>
                        <Badge type="class__attribute" value={`1d${characterClass!.dieHealth} + ${characterClass!.baseHealth}`} />
                        <Badge type="class__attribute" value={`CD ${characterClass!.difficultClass}`} />
                    </div>
                </div>
            </div>

            <Tag text={characterClass!.description} />
        </section>
    )
}