const context = require('./context')
const { ObjectId } = require('mongodb')

function deletePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('userId is not a number')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    const { users, posts } = context

    return users.findOne({ _id: userId })
        .then(user => {
            if (!user) throw new Error('user not found')
            return posts.find().toArray()
        })
        .then(post => {
            if (!post) throw new Error('post not found')
            if(post.author !== userId ) throw new Error('post does not belong to user')
            delete post
            return 
        })
        .then(() => { })
}

module.exports = deletePost