import { useState, useEffect } from "react"

export const Dropdown = ({ allTopics, allPosts, setFilteredPosts }) => {
    const [filterTopic, setFilterTopic] = useState(0)
    const [topicsWithPosts, setTopicsWithPosts] = useState([])

    useEffect(() => {
        // get all topics
        if (filterTopic === 0) {
            setFilteredPosts(allPosts)
        } else {
            const selected = allPosts.filter(
                post => post.topicId === filterTopic
            )
            setFilteredPosts(selected)
        }
    }, [filterTopic, allPosts, setFilteredPosts])

    useEffect(() => {
        const topics = allTopics.filter(topic => {
            return topic.posts.length > 0
        })

        setTopicsWithPosts(topics)
    }, [allTopics])

    return (
        <>
            {" "}
            <select
                name="topics"
                onChange={e => setFilterTopic(parseInt(e.target.value))}
                id="topics"
                className="cursor-pointer rounded-2xl border-1 bg-[var(--white-1)] pl-2 shadow-lg"
            >
                <option value="0">Choose A Topic</option>
                {/* get the topics to filter  */}
                {topicsWithPosts.map(topic => (
                    <option key={topic.id} value={topic.id}>
                        {topic.name}
                    </option>
                ))}
            </select>
        </>
    )
}
