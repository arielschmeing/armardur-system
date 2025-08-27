import { createBrowserRouter } from "react-router";
import { LoginPage } from "./ui/pages/login";
import { RegisterPage } from "./ui/pages/register";
import { PrivateRouter } from "./ui/components/private-router";
import { DashboardPage } from "./ui/pages/dashboard";
import { ErrorSection } from "./ui/components/error-section";
import { ModeratorRouter } from "./ui/components/moderator-router";
import { SkillsPage } from "./ui/pages/skills";
import { CharacterClassesPage } from "./ui/pages/character-classes";
import { CharacterClassPage } from "./ui/pages/character-class";
import { CharacterPage } from "./ui/pages/character";
import { UserPage } from "./ui/pages/user";
import { SearchUsers } from "./ui/pages/search/users";
import { SearchCharacters } from "./ui/pages/search/characters";
import { CreateCharacterPage } from "./ui/pages/create/create-character";
import { CreateSkillPage } from "./ui/pages/create/create-skill";
import { CreateCharacterClassPage } from "./ui/pages/create/create-character-class";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/",
        element: <PrivateRouter />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPage />
            },
            {
                path: "/skill",
                element: <SkillsPage />,
            },
            {
                path: "/search/users",
                element: <SearchUsers />
            },  
            {
                path: "/search/characters",
                element: <SearchCharacters />
            },
            {
                path: "/user",
                element: <UserPage />,
                children: [
                    {
                        path: ":idUser",
                        element: <UserPage />,
                        children: [
                            {
                                path: "character/:idCharacter",
                                element: <CharacterPage />
                            },
                            {
                                path: "character/create",
                                element: <CreateCharacterPage />
                            }
                        ]
                    }
                ]  
            },
            {
                path: "/class",
                element: <CharacterClassesPage />,
                children: [
                    {
                        path: ":id",
                        element: <CharacterClassPage />
                    }
                ]
            },
            {
                path: "/moderator",
                element: <ModeratorRouter />,
                children: [
                    {
                        path: "skill/create",
                        element: <CreateSkillPage />
                    },
                    {
                        path: "class/create",
                        element: <CreateCharacterClassPage />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <ErrorSection />
    }
])