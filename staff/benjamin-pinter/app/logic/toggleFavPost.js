function toggleFavPost(email, postId) {
    let foundUser

    for (let i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (!foundUser)
        return false

    let foundPost

    for (let i = 0; i < posts.length; i++) {
        var post = posts[i]

        if (post.id === postId) {
            foundPost = post

            break
        }
    }

    if (!foundPost)
        return false
    
    
    const index = foundUser.favorites.indexOf(post.id)

    if (index !== -1)
        foundUser.favorites.splice(index, 1)
    else 
        foundUser.favorites.push(post.id)
    
    return true 
}