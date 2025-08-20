import Styles from "./styles.module.css"

import { CardWrapper } from "../../../components/card-wrapper"
import { Checkbox } from "../../../components/checkbox"
import { Button } from "../../../components/button"
import { useScrollNavigation } from "../../../../hooks/use-scroll-navigation.hook"
import { useSelectedClass } from "../../../../stores/class/selected-class.store"

const MOVE = 600

interface ClassLevelSelectProps {
    setLevel: (value: number) => void
    level: number
}

export const ClassLevelSelect = ({ setLevel, level }: ClassLevelSelectProps) => {
    const { moveLeft, moveRight, scrollRef } = useScrollNavigation(MOVE)
    const { selectedClass: characterClass } = useSelectedClass()

    return (
        <CardWrapper title="Selecionar Nível" className="container__class" >
            <div className={Styles.container} ref={scrollRef}>
            {characterClass!.levels.map((classLevel, index) => 
                <Checkbox 
                    className="primary__variant__bg" 
                    name="level-selection" 
                    text={`Nível ${classLevel.level}`} 
                    type="radio"
                    checked={classLevel.level == level}
                    value={classLevel.level}
                    key={index}
                    onChange={(e) => setLevel(Number(e.target.value))}
                />
            )}
            </div>

            <div className={Styles.footer}>
                <Button className="login__button" text="<" id={Styles.left} onClick={moveLeft} />
                <Button className="login__button" text=">" id={Styles.right} onClick={moveRight} />
            </div>
        </CardWrapper>
    )
}