const context = require('./context')
const { ObjectId } = require('mongodb')

function spinGamble(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    const { users } = context

    const userObjectId = new ObjectId(userId)

    return users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not found')
            if (user.balance <= 0) throw Error('not enough money')
            const balance = user.balance - 1

            return users.updateOne({ _id: userObjectId }, {$set:{ balance }})
        })
        .then(() => { })
}

module.exports = spinGamble