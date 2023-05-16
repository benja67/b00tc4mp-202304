function authenticateUser(email, password) {

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email && user.password === password) {

            return true
        }
    }
    return false
}