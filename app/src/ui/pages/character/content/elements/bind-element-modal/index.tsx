import Styles from "./styles.module.css"

import { ElementCard } from "./element-card"
import { useBindElement } from "./use-bind-element.hook"
import { Button } from "../../../../../components/button"

export const BindElementModal = () => {
    const { selectElement, setSelectElement, elements, handlerAddElement } = useBindElement()
    
    return (
        <section className={Styles.container}>
            <div className={Styles.header}>
                <h1>ADICIONAR ELEMENTOS</h1>
                <p>Selecione os elementos do personagem</p>
            </div>
            <div className={Styles.content}>
                {elements().map(([element, affinities]) => 
                    <ElementCard 
                        selectElement={selectElement}
                        setElement={setSelectElement}
                        element={{ name: element, affinities }} 
                        key={element}
                    />
                )}
            </div>
            <div className={Styles.footer}>
                <Button 
                    className="register__button"
                    text="ADICIONAR"
                    onClick={handlerAddElement}
                />
            </div>
        </section>
    )
}