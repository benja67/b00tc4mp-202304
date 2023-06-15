const authenticateUser = require('./authenticateUser')

authenticateUser('dani@681.de', '1', error => {
    if(error) {
        console.error(error)

        return
    }

    console.log('user authenticated')
})