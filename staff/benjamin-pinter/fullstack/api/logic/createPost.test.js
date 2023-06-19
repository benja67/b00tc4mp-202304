const createPost = require('./createPost')

createPost('Jon@morina.de','image', 'text', error => {
    if(error) {
        console.error(error)

        return
    }

    console.log('post created')
})