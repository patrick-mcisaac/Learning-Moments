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

    // set use effect to filter posts on dropdown

    return (
        <div>
            <header className="flex flex-col items-center h-40 justify-around">
                <h1 className="text-5xl font-semibold">All Posts</h1>
                <div>
                    <Search
                        allPosts={allPosts}
                        setFilteredPosts={setFilteredPosts}
                    />
                    {/* set a filter */}
                    <select name="topics" id="topics">
                        {/* get the topics to filter  */}
                        {allTopics.map(topic => (
                            <Dropdown topic={topic} key={topic.id} />
                        ))}
                    </select>
                </div>
            </header>
            <main>
                {filteredPosts.map(post => {
                    return <DisplayPosts post={post} key={post.id} />
                })}
            </main>
        </div>
    )
}
