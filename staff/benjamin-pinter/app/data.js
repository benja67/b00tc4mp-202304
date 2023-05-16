const users = []
const posts = []

// Populate database
{
    const user = {}

    user.name = 'enes'
    user.email = 'enes@meral.de'
    user.password = '1'
    user.favorites = []

    users.push(user)

    const user2 = {}

    user2.name = 'nizi'
    user2.email = 'nizi@19.de'
    user2.password = '1'
    user2.favorites = []

    users.push(user2)

    const post1 = {}

    post1.id = 'post-1'
    post1.user = 'nizi@19.de'
    post1.picture = 'https://www.salarazzmatazz.com/pic/storage/concerts/FREEDOM/MAKAWEB__1920x964.jpg'
    post1.text = 'eee'
    post1.date = new Date
    post1.likes = ['enes@meral.de']

    posts.push(post1)

    const user3 = {}

    user3.name = 'lucio'
    user3.email = 'lucio@101.de'
    user3.password = '1'
    user3.favorites = []
    //TODO wieso fav nicht

    users.push(user3)

    const post2 = {}

    post2.id = 'post-2'
    post2.user = 'lucio@101.de'
    post2.picture = 'https://e.snmc.io/i/600/s/0ebd7646bd908a777af4cfade705be4e/10238127/jul-inspi-dailleurs-cover-art.jpg'
    post2.text = 'lll'
    post2.date = new Date
    post2.likes = []

    posts.push(post2)
}