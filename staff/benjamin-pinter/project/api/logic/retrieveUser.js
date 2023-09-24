const context = require('./context')
const { ObjectId } = require('mongodb')

function retrieveUser(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')

    const { users } = context

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('user not found')

            // sanitize
            delete user._id
            delete user.password

            return user
        })
}

module.exports = retrieveUser