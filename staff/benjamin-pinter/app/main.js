var users = []

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
    
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email && user.password === password) {
            found = user

            break
        }
    }

    if (found) {
        document.querySelector('.login').classList.add('off')
        document.querySelector('.welcome').classList.remove('off')
    } else alert('😂😂😂')
}

document.querySelector('.register').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var user = {}

    user.name = event.target.name.value
    user.email = event.target.email.value
    user.password = event.target.password.value

    users.push(user)

    alert('shqipe')

    document.querySelector('.register').classList.add('off')
    document.querySelector('.login').classList.remove('off')
}