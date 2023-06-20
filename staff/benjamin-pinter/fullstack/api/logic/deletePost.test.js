const deletePost = require('./deletePost')

try {
    deletePost(1, 3, error => {
        if(error) {
            console.error(error)

            return
        }

        console.log('post deleted')
    })
} catch (error) {
    console.error(error)
}