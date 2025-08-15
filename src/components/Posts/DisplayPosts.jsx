import { useEffect, useState } from "react"
import { getPostLikes } from "../../services/postsService.jsx"

export const DisplayPosts = ({ post }) => {
    const [likes, setLikes] = useState([])

    useEffect(() => {
        getPostLikes(post.id).then(res => setLikes(res))
    }, [])

    return (
        <section>
            <h2>{post.title}</h2>
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
