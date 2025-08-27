import Styles from "./styles.module.css"

import { RACES } from "../../../../../../constants/races"
import { Input } from "../../../../../components/input"
import { Select } from "../../../../../components/select"
import { useCreateCharacterResume } from "./use-create-character-resume.hook"

export const CreateCharacterResume = () => {
    const { classes, setValue, setClass } = useCreateCharacterResume()
    
    if(!setValue) return null

    return (
        <>
            <div className={Styles.container__input}>
                <p>Nome do personagem:</p>
                <Input 
                    className="dark__bg__input"
                    name="name"
                    placeholder="Ex.: Arkanthos Tielin"
                    onChange={(e) => setValue("name", e.target.value)}
                />
            </div>

             <div className={Styles.container__input}>
                <p>Raça:</p>
                <Select 
                    defaultOption="Escolha uma raça"
                    name="race"
                    options={RACES}
                    onChange={(e) => setValue("race", e.target.value)}
                />
            </div>

            <div className={Styles.container__input}>
                <p>Classe:</p>
                <Select 
                    defaultOption="Escolha uma classe"
                    name="class"
                    options={classes}
                    onChange={(e) => setClass(e.target.value)}
                />
            </div>

             <div className={Styles.container__input}>
                <p>Imagem personagem:</p>
                <Input 
                    className="dark__bg__input"
                    name="name"
                    placeholder="Ex.: exemplo.com/imagem.png"
                    onChange={(e) => setValue("image", e.target.value)}
                />
            </div>
        </>
    )
}