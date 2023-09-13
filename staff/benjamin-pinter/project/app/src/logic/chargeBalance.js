function chargeBalance(token, additional, callback) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof additional !== 'number') throw new Error('additional is not a number')
    if (typeof callback !== 'function') throw new Error('callback is not a function')

    const xhr = new XMLHttpRequest

    // res

    xhr.onload = () => {
        if (xhr.status === 400) {
            const json = xhr.responseText

            const body = JSON.parse(json)

            callback(new Error(body.error))

            return
        }

        if (xhr.status === 204) {
            callback(null)

            return
        }
    }

    xhr.onerror = () => callback(new Error('connection failed'))

    // req

    xhr.open('PATCH', `http://localhost:8080/users/charge`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { additional }

    const json = JSON.stringify(body)

    xhr.send(json)
}

export default chargeBalance