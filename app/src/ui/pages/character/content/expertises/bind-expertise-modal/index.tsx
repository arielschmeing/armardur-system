import Styles from "./styles.module.css"

import { AttributeCard } from "../../../../../components/attribute-card"
import { Button } from "../../../../../components/button"
import { useBindExpertise } from "./use-bind-expertise.hook"

export const BindExpertiseModal = () => {
    const { expertises, handlerAddExpertise } = useBindExpertise()
    
    return (
        <section className={Styles.container}>
            <div className={Styles.header}>
                <h1>ADICIONAR PERÍCIA</h1>
                <p>Selecione uma perícia para o personagem</p>

                <div className={Styles.line}></div>
            </div>
            <div className={Styles.content}>
                {Array.from(expertises).map(([attribute, expertises]) => 
                    expertises.map(expertise => 
                        <AttributeCard
                        title={attribute}
                        key={expertise}
                        value={expertise}
                    >
                        <Button 
                            className="action_button"
                            text="+"
                            onClick={() => handlerAddExpertise(expertise)}
                        />
                    </AttributeCard>
                    )
                )}
            </div>
        </section>
    )
}