import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getPostDetails, postLikes } from "../../services/postsService"

export const PostDetails = ({ currentUser }) => {
    const { postId } = useParams()
    const [posts, setPosts] = useState([])
    const [filteredPost, setFilteredPost] = useState([])

    useEffect(() => {
        getPostDetails().then(res => setPosts(res))
    }, [])

    useEffect(() => {
        const filtered = posts.filter(post => post.id === parseInt(postId))
        setFilteredPost(filtered)
    }, [postId, posts])

    const handleClick = e => {
        e.preventDefault()
        if (filteredPost[0]?.userId === currentUser?.id) {
            // code to edit
        } else {
            // code to like
            // user id and post id
            const data = {
                userId: currentUser.id,
                postId: filteredPost[0].id
            }
            postLikes(data).then(() => {
                getPostDetails().then(res => setPosts(res))
            })
        }
    }

    return (
        <div className="m-[8rem_auto_2rem_auto] flex w-300 flex-col items-center justify-start gap-10 rounded-2xl border-2 border-gray-200 bg-gray-100 p-10 shadow-2xl">
            <h1 className="text-center text-[3rem]">
                {filteredPost[0]?.title}
            </h1>
            <h2>{filteredPost[0]?.user.name}</h2>
            <div className="m-[2rem_0_0_0] flex w-[100%] justify-between">
                <p>{filteredPost[0]?.topic.name}</p>
                <p>{filteredPost[0]?.date}</p>
            </div>
            <div className="mt-5 w-[90%] rounded-xl border-1 p-10">
                <p className="leading-9">{filteredPost[0]?.body}</p>
            </div>
            <div className="mt-5 flex w-[100%] items-center justify-between">
                <p>
                    <i className="fa-regular fa-thumbs-up"></i> x{" "}
                    {filteredPost[0]?.userLikes.length}
                </p>
                <button
                    onClick={handleClick}
                    className="h-10 w-20 cursor-pointer rounded-xl border-1 text-center"
                >
                    {filteredPost[0]?.userId === parseInt(currentUser?.id) ?
                        "Edit"
                    :   "Like"}
                </button>
            </div>
        </div>
    )
}
