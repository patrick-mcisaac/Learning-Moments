// get all posts
export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=topic").then(res =>
        res.json()
    )
}

export const getPostLikes = id => {
    return fetch(`http://localhost:8088/posts/${id}?_embed=userLikes`).then(
        res => res.json()
    )
}
