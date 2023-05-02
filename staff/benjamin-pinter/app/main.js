const context = {}

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

    const email = event.target.email.value
    const password = event.target.password.value

    const authenticated = authenticateUser(email, password)

    if (authenticated) {
        context.email = email

        document.querySelector('.login').classList.add('off')
        document.querySelector('.welcome').classList.remove('off')
    } else 
        alert('😂😂😂')
}

document.querySelector('.register').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    const registered = registerUser(name, email, password)

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

    const picture = event.target.picture.value
    const text = event.target.text.value

    const created = createPost(context.email, picture, text)

    if (created) {
        document.querySelector('.welcome').querySelector('.modal-post').classList.add('off')

        renderPosts()
    }
    else
        alert('🙅‍♂️🙅‍♂️🙅‍♂️')
}

function renderPosts() {
    document.querySelector('.welcome').querySelector('.home-posts').innerHTML = ''

    const posts = retrievePosts(context.email)

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        const article = document.createElement('article')

        const image = document.createElement('img')
        image.src = post.picture
        image.classList.add('post-image')

        const paragraph = document.createElement('p')
        paragraph.innerText = post.text

        const time = document.createElement('time')
        time.innerText = post.date.toString()

        const button = document.createElement('button')
        button.innerText = 'modify'
        button.onclick = function() {
            document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
            document.querySelector('.welcome').querySelector('.modal-modify').classList.remove('off')
        }

        const buttonlike = document.createElement('button')
        
        if (post.likes.includes(context.email))
            buttonlike.innerText = '🩵'
        else
            buttonlike.innerText = '🤍'

        buttonlike.className = 'buttonlike'
        buttonlike.onclick = function(event) {
            event.preventDefault()
        
            toggleLikePost(context.email, post.id)
        
            if(toggleLikePost)
                renderPosts()
            else 
                alert('failed to like the post!')
        }

        article.append(image, paragraph, time, button, buttonlike)

        document.querySelector('.welcome').querySelector('.home-posts').append(article)
    }
}

document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.cancel').onclick = function(event) {
    event.preventDefault()

    document.querySelector('.welcome').querySelector('.modal-modify').classList.add('off')
}

document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.post-form').onsubmit = function(event) {
    event.preventDefault()

    const postId = event.target.postId.value
    const picture = event.target.picture.value
    const text = event.target.text.value

    const modified = modifyPost(context.email, postId, picture, text)

    if(!modified)
        alert('modification failed!')
    else {
        document.querySelector('.welcome').querySelector('.modal-modify').classList.add('off')

        renderPosts()
    }

}