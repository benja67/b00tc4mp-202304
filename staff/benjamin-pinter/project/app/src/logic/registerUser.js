function registerUser(name, email, password, pay, expire, cvv, typeo, callback) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')
    // if (typeof pay !== 'number') throw new Error('pay is not a number')
    if (typeof expire !== 'string') throw new Error('expire is not a string')
    // if (typeof cvv !== 'number') throw new Error('cvv is not a number')
    if (typeof typeo !== 'string') throw new Error('typeo is not a string')
    // if (typeof callback !== 'function') throw new Error('callback is not a function')

    const xhr = new XMLHttpRequest

    // res

    xhr.onload = () => {
        if (xhr.status === 400) {
            const json = xhr.responseText

            const body = JSON.parse(json)

            callback(new Error(body.error))

            return
        }

        if (xhr.status === 201) {
            callback(null)

            return
        }
    }

    xhr.onerror = () => callback(new Error('connection failed'))

    // req

    xhr.open('POST', 'http://localhost:8080/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { name, email, password, pay, expire, cvv, typeo}

    const json = JSON.stringify(body)

    xhr.send(json)
}

export default registerUser