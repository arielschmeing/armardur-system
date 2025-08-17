import Styles from "./styles.module.css"

import { SearchIcon } from "../icons/search"
import { Input } from "../input"

interface SearchBarProps {
    title?: string
    placeholder: string
    setSearch: (value: string) => void
}

export const SearchBar = ({ title, placeholder, setSearch }: SearchBarProps) => {
    return (
        <section className={Styles.container}>
            {title &&
                <h1>{title}</h1>
            }

            <Input 
                className="login__input"
                name="search"
                placeholder={placeholder}
                onChange={(e) => setSearch(e.target.value)}
            >
                <SearchIcon />
            </Input>
        </section>
    )
}