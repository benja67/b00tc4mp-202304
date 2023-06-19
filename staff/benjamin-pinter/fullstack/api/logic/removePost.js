const fs = require('fs')

function removePost(email, postId, callback) {
    fs.readFile('data/users.json', (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const users = JSON.parse(json)
        const found = users.find(user => user.email === email)
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

            const index = posts.findIndex(post => post.id === postId)
            const deleted = posts.splice(index, 1)
            if(!deleted) {
                callback(new Error('post not deleted!'))
    
                return
            }
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

module.exports = removePost