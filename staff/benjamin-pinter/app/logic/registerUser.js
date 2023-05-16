function registerUser(name, email, password){

    let foundUser

    for (let i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email){
           foundUser = user

           break
        }
    }

    if (foundUser)
        return false
    else {
        var user = {}

        user.name = name
        user.email = email
        user.password = password
        user.favorites = []

        users.push(user)

        return true
    }
}