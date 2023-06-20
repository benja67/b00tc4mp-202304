const updatePost = require('./updatePost')

try {
    updatePost(1, 1, 'imageNew', 'textNew' , error => {
        if(error) {
            console.error(error)

            return
        }

        console.log('post updated')
    })
} catch (error) {
    console.error(error)
}