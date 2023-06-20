const createPost = require('./createPost')

try {
    createPost(1,'image', 'text', error => {
        if(error) {
            console.error(error)

            return
        }

        console.log('post created')
    })
} catch (error) {
    console.error(error)
}