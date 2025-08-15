import { useState, useEffect } from "react"

export const Search = ({ allPosts, setFilteredPosts }) => {
    const [userInput, setUserInput] = useState("")

    // set use effect to filter posts on change user input

    useEffect(() => {
        const filtered = allPosts.filter(post =>
            post.title.toLowerCase().includes(userInput.toLowerCase())
        )
        setFilteredPosts(filtered)
    }, [userInput, allPosts])

    return (
        <input
            type="text"
            placeholder="Search"
            onChange={e => setUserInput(e.target.value)}
        />
    )
}
