const registerUser = require('./registerUser')
try {
    registerUser('dani681', 'dani@681.de', '1', error => {
        if(error) {
            console.error(error)

            return
        }

        console.log('user registered')
    })
} catch (error) {
    console.error(error)
}