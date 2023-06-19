const removePost = require('./removePost')

removePost('Jon@morina.de', 'post-1' , error => {
    if(error) {
        console.error(error)

        return
    }

    console.log('post removed')
})