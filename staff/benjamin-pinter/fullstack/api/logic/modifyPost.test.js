const modifyPost = require('./modifyPost')

modifyPost('Jon@morina.de', 'post-1', 'imageNew', 'textNew' , error => {
    if(error) {
        console.error(error)

        return
    }

    console.log('post modified')
})