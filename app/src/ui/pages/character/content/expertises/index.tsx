import { Button } from "../../../../components/button"
import { useCharacterExpertises } from "./use-character-expertises.hook"
import { Modal } from "../../../../components/modal"
import { BindExpertiseModal } from "./bind-expertise-modal"
import { AttributeCard } from "../../../../components/attribute-card"
import { ContentCard } from "../card"

export const CharacterContentExpertises = () => {
    const { character, navigate, isActive, setIsActive, removeExpertise } = useCharacterExpertises()

    if(navigate !== "expertises") return null

    return (
        <ContentCard
            title="PERÍCIAS:"
            description="Adicione perícias ao seu personagem..."
            attribute="expertises"
            setIsActive={setIsActive}
        >
        {character?.expertises.map((expertise) =>
            <AttributeCard
                title={expertise.modifier.toUpperCase()} 
                key={expertise.name} 
                value={expertise.name}
            >
                <Button 
                    className="action_button"
                    id="cancel__button"
                    text="x"
                    onClick={() => removeExpertise(expertise.name)}
                />
            </AttributeCard>
        )}
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <BindExpertiseModal />
            </Modal>
        </ContentCard>
    )
}