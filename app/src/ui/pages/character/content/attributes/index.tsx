import Styles from "./styles.module.css"

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts"
import { Checkbox } from "../../../../components/checkbox"
import { BadgeBlock } from "../../../../components/badge-block"
import { useCharacterAttributes } from "./use-character-attributes.hook"

export const CharacterContentAttributes = () => {
    const { 
        attributes, 
        handlerChecked, 
        maxValue, 
        minValue, 
        navigate, 
        valueType, 
        character 
    } = useCharacterAttributes()

    if(navigate !== "attributes" || !character) return null

    return (
        <div className={Styles.container}>
            <div className={Styles.header}>
                <h1>Atributos:</h1>

                <Checkbox 
                    name="changeType"
                    text="Modificador"
                    type="checkbox"
                    className="switch__checkbox"
                    onChange={(e) => handlerChecked(e.target.checked)}
                />
            </div>
            
            <ResponsiveContainer className={Styles.content}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={attributes}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis domain={[minValue, maxValue]} angle={15} />
                    <Tooltip />
                    <Radar 
                        name="Atributo"
                        dataKey={valueType} 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.6}
                        max={20}
                    />
                </RadarChart>
            </ResponsiveContainer>

            <div className={Styles.line}></div>

            <div className={Styles.container__attributes}>
                {attributes.map(attr => 
                    <BadgeBlock 
                    title={attr.name}    
                    content={`MOD: ${attr.modifier}`}
                    subContent={`TOTAL: ${attr.value}`}
                    key={attr.name}
                    />
                )}
            </div>
        </div>
    )
}