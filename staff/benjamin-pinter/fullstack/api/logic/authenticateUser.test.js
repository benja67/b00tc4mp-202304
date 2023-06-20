const authenticateUser = require('./authenticateUser')

try {
    authenticateUser('bauma@beisser.de', '1', (error, userId) => {
        if(error) {
            console.error(error)

            return
        }

        console.log(userId)
    })
} catch (error) {
    console.error(error)
}