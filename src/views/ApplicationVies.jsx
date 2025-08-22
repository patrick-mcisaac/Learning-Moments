import { Outlet, Route, Routes } from "react-router"
import { AllPosts } from "../components/Posts/AllPosts"
import { NavBar } from "../components/nav/NavBar"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<AllPosts />}></Route>
            </Route>
        </Routes>
    )
}
