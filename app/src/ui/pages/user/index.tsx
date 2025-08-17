import { PageWrapper } from "../../components/page-wrapper"
import { SearchBar } from "../../components/search-bar"
import { UserCard } from "../../components/user-card"
import { CharacterPage } from "../character"
import { useUserPage } from "./use-user-page.hook"
import { CharactersResumeList } from "../../components/characters-resume-list"

export const UserPage = () => {
    const { idCharacter, user, characters, setCharacters } = useUserPage()

    if(idCharacter) return <CharacterPage />

    return (
        <PageWrapper hasSuspense>
            <UserCard user={user} />

            <SearchBar
                placeholder="Pesquisar personagem"
                setSearch={setCharacters}
            />

            <CharactersResumeList 
                characters={characters}
            />
        </PageWrapper>        
    )
}