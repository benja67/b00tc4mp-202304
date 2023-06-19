const fs = require('fs')
//TODO was fs?

function createPost(email, image, text, callback) {
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

            let id

            if (!posts.length)
                id = 'post-1'
            else {
                const last = posts[posts.length - 1]
                const num = Number(last.id.slice(5))
                id = 'post-' + (num + 1)
            }

            const post = { user: email, image, text, id }

            posts.push(post)

            const json2 = JSON.stringify(posts)

            fs.writeFile('data/posts.json', json2, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        })
    })
}

module.exports = createPost