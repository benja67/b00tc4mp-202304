const retrievePosts = require('./retrievePosts')

retrievePosts('Jon@morina.de', (error, posts) => {
    if(error) {
        console.error(error)

        return
    }

    console.log(posts)
})