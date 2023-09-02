import registerUser from "../logic/registerUser"

function Register(props) {
    console.log('Register -> render')

    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const pay = event.target.pay.value
        const expire = event.target.expire.value
        const cvv = event.target.cvv.value
        const typeo = event.target.typeo.value

        try {
            registerUser(name, email, password, pay, expire, cvv, typeo, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                alert('User registered')

                props.onRegistered()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToLogin = function (event) {
        event.preventDefault()

        props.onGoToLogin()
    }

    return <div className="register-page">
        <h1>Register for BIG Loot!🏦⚱️🥇🔑</h1>

        <form onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"></input>

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>

            <label htmlFor="pay">Creditcard Number</label>
            <input type="number" name="pay" id="pay"></input>

            <label htmlFor="expire">Expiration date</label>
            <input type="month" name="expire" id="expire"></input>

            <label htmlFor="cvv">CVV</label>
            <input type="number" name="cvv" id="cvv"></input>

            <label htmlFor="typeo">Type of credit card</label>
            <input type="text" name="typeo" id="typeo"></input>


            <button type="submit">Register</button>
        </form>

        <a href="" onClick={handleGoToLogin}>Login</a>
        <img src="public/register.jpeg" alt="register" width="600" height="400"></img>
        <div className="audio-register off">
        <audio src="public/registers.mp3" controls autoPlay loop>
        Your browser does not support the audio element.
        </audio>
        </div>
    </div>

}

export default Register