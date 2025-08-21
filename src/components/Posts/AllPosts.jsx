import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/postsService.jsx"
import { getAllTopics } from "../../services/topicsService.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"
import { Search } from "../Search/Search.jsx"
import { DisplayPosts } from "./DisplayPosts.jsx"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(res => setAllPosts(res))
        getAllTopics().then(res => setAllTopics(res))
    }, [])

    return (
        <div className="flex min-h-[100vh] flex-col items-stretch bg-[var(--grey-2)]">
            <header className="mt-10 flex h-60 flex-col items-center justify-around gap-10">
                <h1 className="font-semibold tracking-wider">All Posts</h1>
                <div className="mr-[6%] flex flex-row justify-end gap-[8rem] self-stretch pr-20">
                    <Search
                        allPosts={allPosts}
                        setFilteredPosts={setFilteredPosts}
                    />
                    {/* set a filter */}
                    <Dropdown
                        allPosts={allPosts}
                        setFilteredPosts={setFilteredPosts}
                        allTopics={allTopics}
                    />
                </div>
            </header>
            <main className="mt-30 flex w-[75%] flex-wrap justify-between gap-[5rem_10rem] self-center p-20">
                {filteredPosts.map(post => {
                    return <DisplayPosts post={post} key={post.id} />
                })}
            </main>
        </div>
    )
}
