const fs = require('fs')
const authenticateUser = require('./authenticateUser')
//TODO was fs?

function createPost(name, email, password, image, text, time, callback) {
    authenticateUser(email, password)
    fs.readFile('data/posts.json'), (error, json) => {
        if(error) {
            callback(error)

            return
        }
    
        const posts= JSON.parse(json)

        const post = { name, image, text, time}

        posts.push(post)

        const json2 = JSON.stringify(posts)

        fs.writeFile('data/posts.json', json2, error => {
            if(error) {
                callback(error)

                return
            }

            callback(null)
        })
    }
}

module.exports = createPost