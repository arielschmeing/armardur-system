import Styles from "./styles.module.css"

import { PageWrapper } from "../../components/page-wrapper"
import { CreateCharacterResume } from "./content/resume"
import { useCreateCharacter } from "./use-create-character.hook"
import { CardWrapper } from "../../components/card-wrapper"
import { CreateCharacterStatus } from "./content/status"
import { CreateCharacterActions } from "./content/actions"

export const CreateCharacterPage = () => {
    useCreateCharacter()

    return (
        <PageWrapper>
            <h1 className={Styles.title}>CRIAR PERSONAGEM</h1>

            <CardWrapper className="container__medium__margin">
                <CreateCharacterResume />
                <CreateCharacterStatus />
                <CreateCharacterActions />
            </CardWrapper>
        </PageWrapper>
    )
}