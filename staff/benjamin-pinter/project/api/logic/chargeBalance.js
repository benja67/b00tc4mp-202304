const context = require('./context')
const { ObjectId } = require('mongodb')

function chargeBalance(userId, additional) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof additional !== 'number') throw new Error('additional is not a number')
    const { users } = context

    const userObjectId = new ObjectId(userId)

    return users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not found')

            const newBalance = user.balance + additional
            additional = newBalance

            return users.chargeBalance({ _id: userObjectId }, { $set: { additional } })
        })
        .then(() => { })
}

module.exports = chargeBalance