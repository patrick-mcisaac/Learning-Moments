import { useEffect, useState } from "react"
import { getPostLikes } from "../../services/postsService.jsx"

export const DisplayPosts = ({ post }) => {
    const [likes, setLikes] = useState([])

    useEffect(() => {
        getPostLikes(post.id).then(res => setLikes(res))
    }, [])

    return (
        <section className="flex h-60 basis-xl cursor-pointer flex-col items-center justify-evenly rounded-2xl border-[.1rem] border-[var(--grey-1)] bg-[var(--white-1)] p-2 shadow-xl transition hover:scale-110">
            <h2 className="text-center">{post.title}</h2>
            <h3>{post.topic.name}</h3>
            <p>
                <i className="fa-regular fa-thumbs-up"></i> x{" "}
                {likes.userLikes?.length}
            </p>
        </section>
    )
    // topics
    // likes
}
