const fs = require('fs')

function authenticateUser(email, password, callback) {
    fs.readFile('data/users.json', (error, json) => {
        if(error) {
            callback(error)

            return
        }
    
        const users = JSON.parse(json)

        const authenticated = users.some(user => user.email === email && user.password === password)

        if (!authenticated) {
            callback(new Error('wrong credentials!'))

            return
        }
        callback(null)
    })
}

module.exports = authenticateUser