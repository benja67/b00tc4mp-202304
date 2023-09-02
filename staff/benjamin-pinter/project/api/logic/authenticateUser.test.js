const mongodb = require('mongodb')
const retrieveUser = require('./retrieveUser')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        try {
            return retrieveUser('649d7c76782a6ca030d68f42')
                .then(user => console.log(user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => client.close())