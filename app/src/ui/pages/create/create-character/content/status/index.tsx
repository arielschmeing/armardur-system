import Styles from "./styles.module.css"

import { AddIcon } from "../../../../../components/icons/add"
import { Range } from "../../../../../components/range"
import { useCreateCharacterStatus } from "./use-create-character-status.hook"
import { Badge } from "../../../../../components/badge"

export const CreateCharacterStatus = () => {    
    const {
        DEFAULT_ATTRIBUTE,
        DEFAULT_HP,
        MAX_ATTRIBUTE,
        MAX_HP,
        MIN_ATTRIBUTE,
        MIN_HP,
        setValue,
        character,
        attributes
    } = useCreateCharacterStatus()
    
    if(!setValue) return null

    return (
        <div className={Styles.container}>
            <div className={Styles.container__hp}>
                <Range 
                    Icon={AddIcon}
                    name="hp"
                    title="Pontos de Vida (HP)"
                    min={MIN_HP}
                    max={MAX_HP}
                    defaultValue={DEFAULT_HP}
                    onChange={(e) => setValue("hp", e.target.value)}
                >
                    <Badge 
                        type="level"
                        value={character?.hp ?? DEFAULT_HP}
                    />
                </Range>
            </div>

            <div className={Styles.container__attributes}>
            {attributes.map(attribute =>
                <Range
                    defaultValue={DEFAULT_ATTRIBUTE}
                    name={attribute}
                    title={attribute}
                    min={MIN_ATTRIBUTE}
                    max={MAX_ATTRIBUTE}
                    key={attribute}
                    onChange={(e) => setValue(attribute, e.target.value)}
                >
                    <Badge 
                        type="aura"
                        value={`${character?.[attribute] ?? DEFAULT_ATTRIBUTE}`}
                    />
                </Range>
            )}
            </div>
        </div>
    )
}