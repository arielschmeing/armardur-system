import { CharactersResumeList } from "../../../components/characters-resume-list"
import { PageWrapper } from "../../../components/page-wrapper"
import { SearchBar } from "../../../components/search-bar"
import { useSearchCharacters } from "./use-search-characters.hook"

export const SearchCharacters = () => {
    const { characters, setSearch } = useSearchCharacters()
    
    return (
        <PageWrapper hasSuspense>
            <SearchBar 
                placeholder="Procure um personagem..." 
                setSearch={setSearch} 
                title="Personagens" 
            />

            <CharactersResumeList 
                characters={characters}
            />
        </PageWrapper>
    )
}