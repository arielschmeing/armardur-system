import { SkillCard } from "../../components/skill-card"
import { PageWrapper } from "../../components/page-wrapper"
import { SearchBar } from "../../components/search-bar"
import { ListWrapper } from "../../components/list-wrapper"
import { useSkills } from "./use-skills.hook"

export const SkillsPage = () => {
    const { skills, setSkills } = useSkills()
    
    return (
        <PageWrapper hasSuspense>
            <SearchBar
                setSearch={setSkills}
                placeholder="Pesquisar habilidades..."
                title="Habilidades"
            />

            <ListWrapper list={skills}>
            {skills.map((ability, index) => 
                <SkillCard skill={ability} key={index} />
            )}
            </ListWrapper>
        </PageWrapper>
    )
}