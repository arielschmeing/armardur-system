import { useCharacterElements } from "./use-character-elements.hook"
import { ContentCard } from "../card"
import { Modal } from "../../../../components/modal"
import { BindElementModal } from "./bind-element-modal"
import { AttributeCard } from "../../../../components/attribute-card"
import { Button } from "../../../../components/button"

export const CharacterContentElements = () => {
    const { character, navigate, isActive, setIsActive, handlerRemoveElement } = useCharacterElements()    

    if(navigate !== "elements") return null

    return (
        <ContentCard
            title="ELEMENTOS:"
            description="Adicione elementos ao personagem..."
            attribute="elements"
            setIsActive={setIsActive}
        >
        {character?.elements.map((element) =>
            <AttributeCard 
                title={element.name}
                value={element.affinity ? "Afinidade" : "Elemento puro"}
                key={element.name}
            >
                <Button 
                    className="action_button"
                    text="x"
                    id="delete__action"
                    onClick={() => handlerRemoveElement(element)}
                />
            </AttributeCard>
        )}

            <Modal isActive={isActive} setIsActive={setIsActive}>
                <BindElementModal />
            </Modal>
        </ContentCard>
    )
}