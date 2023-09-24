const context = require('./context')
const { ObjectId } = require('mongodb')

function spinGamble(userId, postId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    const { users, posts } = context

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not found')
            if (user.balance <= 0) throw Error('not enough money')
            let balance = user.balance - 1

            if (postId == "64f5cd9ccf09234f8e1d6ec2")
            {
                lootbox = { price : 130000 }
                threshold = 1/lootbox.price
                random = Math.random()
                if (random <= threshold) {
                    balance = balance + 100000
                }
            }
            if (postId == "64f5cc57cf09234f8e1d6ec0")
            {
                lootbox = { price : 30000 }
                threshold = 1/lootbox.price
                random = Math.random()
                if (random <= threshold) {
                    balance = balance + 15000
                }
            }
            if (postId == "64f5ca85cf09234f8e1d6ebe")
            {
                lootbox = { price : 700 }
                threshold = 1/lootbox.price
                random = Math.random()
                if (random <= threshold) {
                    balance = balance + 400
                }
            }
            if (postId == "64f5c4f8cf09234f8e1d6ebc")
            {
                lootbox = { price : 3 }
                threshold = 1/lootbox.price
                random = Math.random()
                if (random <= threshold) {
                    balance = balance + 2
                }
            }

            return users.updateOne({ _id: userObjectId }, {$set:{ balance }})
        })
        .then(() => { })
}

module.exports = spinGamble