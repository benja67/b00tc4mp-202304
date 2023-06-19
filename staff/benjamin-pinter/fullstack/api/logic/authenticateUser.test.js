const authenticateUser = require('./authenticateUser')

authenticateUser('bauma@beisser.de', '1', error => {
    if(error) {
        console.error(error)

        return
    }

    console.log('user authenticated')
})