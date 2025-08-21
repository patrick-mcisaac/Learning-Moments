export const getAllTopics = () => {
    return fetch("http://localhost:8088/topics?_embed=posts").then(res =>
        res.json()
    )
}
