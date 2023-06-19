const fs = require('fs')

function modifyPost(email, postId, image, text, callback) {
    fs.readFile('data/users.json', (error, json) => {
        if (error) {
         callback(error)

         return
        }
        const users = JSON.parse(json)
        const found = users.some(user => user.email === email)
        if (!found) {
            callback(new Error('user not found!'))

            return
        }
        fs.readFile('data/posts.json', (error, json) => {
            if (error) {
             callback(error)
    
             return
            }
            const posts = JSON.parse(json)
            const post = posts.find(post => post.id === postId)
            if (!post) {
                callback(new Error('post not found!'))
    
                return
            }
            if(post.user !== email) {
                callback(new Error('post does not belong to the User!'))
    
                return
            }
            post.image = image
            post.text = text
            post.date = new Date
            const json2 = JSON.stringify(posts)
            fs.writeFile('data/posts.json', json2, error => {
                if(error) {
                    callback(error)
    
                    return
                }
    
                callback(null)
            })
        })
    })
}

module.exports = modifyPost