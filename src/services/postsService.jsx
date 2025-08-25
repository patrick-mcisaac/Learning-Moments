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

export const getPostDetails = () => {
    return fetch(
        `http://localhost:8088/posts?_embed=userLikes&_expand=user&_expand=topic`
    ).then(res => res.json())
}

// update the amount of likes
export const postLikes = data => {
    return fetch(`http://localhost:8088/userLikes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
