const context = require('./context')
const { ObjectId } = require('mongodb')

function updatePost(userId, postId, image, text) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if (typeof image !== 'string') throw new Error('image is not a number')
    if (typeof text !== 'string') throw new Error('text is not a string')

    const { users, posts } = context

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('user not found')
            return posts.findOne({_id: new ObjectId(postId)})
        })
        .then(post => {
            if (!post) throw new Error('post not found')
            if(post.author.toString() !== userId ) throw new Error('post does not belong to user')
            const postnew = {
                author: userId,
                id: postId,
                image,
                text,
                date: new Date
            }
            return posts.insertOne(postnew)
        })
        .then(() => { })
}

module.exports = updatePost