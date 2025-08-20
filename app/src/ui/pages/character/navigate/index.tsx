import { NavigateType } from "../use-character-page.hook"
import { CardWrapper } from "../../../components/card-wrapper"
import { Checkbox } from "../../../components/checkbox"
import { useCharacterNavigate } from "../../../../stores/character/character-navigate.store"

interface Data {
    text: string
    value: NavigateType
}

const data: Data[] = [
    { text: "Visão geral", value: "general" },
    { text: "Atributos", value: "attributes"  },
    { text: "Perícias", value: "expertises"  },
    { text: "Habilidades", value: "skills"  },
    { text: "Elementos", value: "elements"  }
]

export const CharacterNavigate = () => {
    const { navigate, updateNavigate } = useCharacterNavigate()
    
    return (
        <CardWrapper 
            title="Navegação" 
            className="container__big__margin"
        >
        {data.map((item, index) => 
            <Checkbox 
                className="variant__no__bg__radio" 
                type="radio" 
                name="navigation-character"
                text={item.text}
                checked={item.value === navigate}
                onChange={() => updateNavigate(item.value)}
                key={index}
            />
        )}
        </CardWrapper>
    )
}