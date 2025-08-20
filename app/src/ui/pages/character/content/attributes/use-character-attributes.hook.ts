import { useState } from "react"
import { getAttributes } from "../../../../../utils/get-attributes.util"
import { useSelectedCharacter } from "../../../../../stores/character/selected-character.store"
import { useCharacterNavigate } from "../../../../../stores/character/character-navigate.store"

export const useCharacterAttributes = () => {
    const { selectedCharacter: character } = useSelectedCharacter()
    const { navigate } = useCharacterNavigate()
    const [valueType, setValueType] = useState<"value" | "modifier">("value")
    const [maxValue, setMaxValue] = useState<5 | 20>(20)
    const [minValue, setMinValue] = useState<-5 | 0>(0)

    const attributes = getAttributes(character)

    const handlerChecked = (isChecked: boolean) => {
        if(isChecked) {
            setValueType("modifier")
            setMaxValue(5)
            setMinValue(-5)

            return
        }

        setValueType("value")
        setMaxValue(20)
    }
    
    return {
        navigate,
        attributes,
        valueType,
        maxValue,
        minValue,
        handlerChecked,
        character
    }
}