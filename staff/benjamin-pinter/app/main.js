var context = []
// TODO wieso nicht in data

document.querySelector('.login').querySelector('a').onclick = function (event) {
    event.preventDefault()
    document.querySelector('.login').classList.add('off')
    document.querySelector('.register').classList.remove('off')
}

document.querySelector('.register').querySelector('a').onclick = function (event) {
    event.preventDefault()
    document.querySelector('.register').classList.add('off')
    document.querySelector('.login').classList.remove('off')
}

document.querySelector('.login').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    var authenticated = authenticateUser(email, password)

    if (authenticated) {
        context.email = email

        document.querySelector('.login').classList.add('off')
        document.querySelector('.welcome').classList.remove('off')
    } else 
        alert('😂😂😂')
}

document.querySelector('.register').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var name = event.target.name.value
    var email = event.target.email.value
    var password = event.target.password.value

    var registered = registerUser(name, email, password)

    if (registered) {
     alert('shqipe')

     document.querySelector('.register').classList.add('off')
     document.querySelector('.login').classList.remove('off')
    }
    else {
     alert('Person is already albanian!')
    }
}

document.querySelector('.welcome').querySelector('.create-button').onclick = function (event) {
    document.querySelector('.welcome').querySelector('.modal-post').classList.remove('off')
}

document.querySelector('.welcome').querySelector('.modal-post').querySelector('.cancel').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.welcome').querySelector('.modal-post').classList.add('off')
}

document.querySelector('.welcome').querySelector('.modal-post').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    var picture = event.target.picture.value
    var text = event.target.text.value

    var created = createPost(context.email, picture, text)

    if (created) {
        document.querySelector('.welcome').querySelector('.modal-post').classList.add('off')

        renderPosts()
    }
    else
        alert('🙅‍♂️🙅‍♂️🙅‍♂️')
}

function renderPosts() {
    document.querySelector('.welcome').querySelector('.home-posts').innerHTML = ''

    var posts = retrievePosts(context.email)

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i]

        var article = document.createElement('article')

        var image = document.createElement('img')
        image.src = post.picture
        image.classList.add('post-image')

        var paragraph = document.createElement('p')
        paragraph.innerText = post.text

        var time = document.createElement('time')
        time.innerText = post.date.toString()

        article.append(image, paragraph, time)

        document.querySelector('.welcome').querySelector('.home-posts').append(article)
    }
}