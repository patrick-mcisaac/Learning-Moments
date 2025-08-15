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
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                onChange={e => setUserInput(e.target.value)}
                className="h-13 w-80 rounded-2xl border-1 bg-[var(--white-1)] pl-8 text-xl shadow-lg"
            />
            <i className="fa-solid fa-magnifying-glass absolute top-[1.3rem] left-2"></i>
        </div>
    )
}
