import { PageWrapper } from "../../components/page-wrapper"
import { useCharacterClasses } from "./use-character-classes.hook"
import { SearchBar } from "../../components/search-bar"
import { ListWrapper } from "../../components/list-wrapper"
import { CharacterClassCard } from "../../components/character-class-card"
import { CharacterClassPage } from "../character-class"
import { useParams } from "react-router"

export const CharacterClassesPage = () => {
    const { id } = useParams()
    
    if(id) return <CharacterClassPage />

    const { classes, setClasses } = useCharacterClasses()
    
    return (
        <PageWrapper hasSuspense>
            <SearchBar 
                setSearch={setClasses}
                placeholder="Pesquisar classes"
                title="Classes"
            />

            <ListWrapper list={classes}>
            {classes.map((characterClass, index) => 
                <CharacterClassCard characterClass={characterClass} key={index} />
            )}
            </ListWrapper>
        </PageWrapper>
    )
}