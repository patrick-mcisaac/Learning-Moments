import { Outlet, Route, Routes } from "react-router"
import { AllPosts } from "../components/Posts/AllPosts"
import { NavBar } from "../components/nav/NavBar"
import { useEffect, useState } from "react"
import { PostDetails } from "../components/Posts/PostDetails"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObject = JSON.parse(localLearningUser)
        setCurrentUser(learningUserObject)
    }, [])
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
                <Route index element={<AllPosts />} />
                <Route
                    path="posts/:postId"
                    element={<PostDetails currentUser={currentUser} />}
                />
            </Route>
        </Routes>
    )
}
