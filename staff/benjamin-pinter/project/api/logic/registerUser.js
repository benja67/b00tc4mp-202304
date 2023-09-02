const context = require('./context')

function registerUser(name, email, password, pay, expire, cvv, typeo, balance) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')
    // if (typeof pay !== 'number') throw new Error('pay is not a number')
    if (typeof expire !== 'string') throw new Error('expire is not a string')
    // if (typeof cvv !== 'number') throw new Error('cvv is not a number')
    if (typeof typeo !== 'string') throw new Error('typeo is not a string')
    // if (typeof callback !== 'function') throw new Error('callback is not a function')

    //const users = context.users
    const { users } = context

    return users.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already exists')

            const balance = 10

            return users.insertOne({ name, email, password, pay, expire, cvv, typeo, balance })
        })
        .then(result => { })
}

module.exports = registerUser