import { CharacterContent } from "./content"
import { CharacterHeader } from "./header"
import { CharacterNavigate } from "./navigate"
import { PageWrapper } from "../../components/page-wrapper"
import { useCharacterPage } from "./use-character-page.hook"

export const CharacterPage = () => {
    const {} = useCharacterPage()

    return (
        <PageWrapper hasSuspense>
            <CharacterHeader />

            <CharacterNavigate />

            <CharacterContent />
        </PageWrapper>
    )
}