const createPost = require('./createPost')

createPost('Jon Morina', 'Jon@morina.de', '1',image, text, time, error => {
    if(error) {
        console.error(error)

        return
    }

    console.log('post created')
})