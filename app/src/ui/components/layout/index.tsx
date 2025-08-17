import { Outlet } from "react-router"
import { Header } from "../header"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}