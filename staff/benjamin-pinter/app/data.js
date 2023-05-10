const users = []
const posts = []

// Populate database
const user = {}

user.name = 'enes'
user.email = 'enes@meral.de'
user.password = '1'

users.push(user)

const user2 = {}

user2.name = 'nizi'
user2.email = 'nizi@19.de'
user2.password = '1'

users.push(user2)

const post1 = {}

post1.id = 'post-1'
post1.user = 'nizi@19.de'
post1.picture = 'https://www.salarazzmatazz.com/pic/storage/concerts/FREEDOM/MAKAWEB__1920x964.jpg'
post1.text = 'eee'
post1.date = new Date
post1.likes = ['enes@meral.de']

posts.push(post1)