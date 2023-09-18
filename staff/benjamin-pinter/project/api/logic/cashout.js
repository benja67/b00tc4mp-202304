const context = require('./context')
const { ObjectId } = require('mongodb')

function cashout(userId, amount) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof amount !== 'number') throw new Error('amount is not a number')
    const { users } = context

    const userObjectId = new ObjectId(userId)

    return users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not found')
            if (amount > user.balance) throw Error('not enough money')

            const newBalance = user.balance - amount

            return users.updateOne({ _id: userObjectId }, { $set: { balance: newBalance } })
        })
        .then(() => { })
}

module.exports = cashout