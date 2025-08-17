import Styles from "./styles.module.css"

import { useState } from "react"
import { Affinity } from "../../../../../../../enums/affinity.enum"
import { ArrowIcon } from "../../../../../../components/icons/arrow"

interface ElementCardProps {
    element: { name: string, affinities: Affinity[] }
    selectElement: string | null
    setElement: (value: string) => void
}

export const ElementCard = ({ element, setElement, selectElement }: ElementCardProps) => {
    const [expended, setExpended] = useState(false)

    return (
        <div className={Styles.container}>
            <div 
                className={`${Styles.content} ${selectElement === element.name ? Styles.selected : ""}`} 
                onClick={() => setElement(element.name)}
            >
                <div>
                    <h3>{element.name}</h3>

                    {element.affinities.length !== 0 &&
                        <ArrowIcon 
                            className={expended ? Styles.icon__open : Styles.icon__close}
                            onClick={() => setExpended(!expended)}
                        />
                    }
                </div>
            </div>
            {expended &&
                <div className={Styles.affinities}>
                    {element.affinities.map(affinity => 
                        <ElementCard
                            selectElement={selectElement}
                            element={{ name: affinity, affinities: [] }}
                            setElement={setElement}
                            key={affinity}
                        />
                    )}
                </div>
            }
        </div>
    )
}