const retrieveUser = require('./retrieveUser')

try {
    retrieveUser(2, (error, user) => {
        if(error) {
            console.error(error)

            return
        }

        console.log(user)
    })
} catch (error) {
    console.error(error)
}