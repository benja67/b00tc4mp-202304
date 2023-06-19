const fs = require('fs')

function retrievePosts(email, callback) {
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
            if (!posts) {
                callback(new Error('posts not found!'))

                return
            }
            callback(null, posts)
        })
    })
}

module.exports = retrievePosts