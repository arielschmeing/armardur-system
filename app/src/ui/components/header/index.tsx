import Styles from "./styles.module.css"

import { Link, useLocation } from "react-router"
import { Logo } from "../logo"
import { Checkbox } from "../checkbox"

export const Header = () => {
    const { pathname } = useLocation()

    const navigation = [
        { text: "Perfil", path: `/user` },
        { text: "Habilidades", path: "/skill" },
        { text: "Classes", path: "/class" }
    ]

    return (
        <header className={Styles.container}>
            <nav>
                <Link to="/dashboard">
                    <Logo size="52px"/>
                </Link>

                <div>
                    {navigation.map((nav, index) => 
                        <Link to={nav.path} key={index}>
                            <Checkbox
                                className="primary__variant__no__bg"
                                id={nav.path}
                                name="navigation"
                                text={nav.text}
                                type="radio"
                                checked={pathname.includes(nav.path)}
                                key={index}
                                readOnly
                            />
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}