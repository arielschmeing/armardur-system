import Styles from "./styles.module.css"

import { PageWrapper } from "../../../components/page-wrapper"
import { SearchBar } from "../../../components/search-bar"
import { useSearchUsers } from "./use-search-users.hook"
import { UserResumeCard } from "../../../components/user-resume-card"

export const SearchUsers = () => {
    const { users, setSearch } = useSearchUsers()
    
    return (
        <PageWrapper hasSuspense>
            <SearchBar 
                placeholder="Pesquisar "
                setSearch={setSearch}
                title="Usuários"
            />

            {users.length !== 0 &&
                <div className={Styles.content}>
                {users.map((user, index) => 
                    <UserResumeCard 
                        user={user} 
                        key={index}
                    />
                )}
                </div>
            }

            {users.length === 0 &&
                <div className={Styles.void__content}>
                    <p>Ops... não encontramos nenhum usuários esse nome.</p>
                </div>
            }
        </PageWrapper>
    )
}