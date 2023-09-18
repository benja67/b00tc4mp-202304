
import authenticateUser from '../logic/authenticateUser'
import context from '../context'

function Login(props) {
    console.log('Login -> render')

    const handleLogin = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    alert(error.message)

                    return
                }

                context.token = token

                props.onLoggedIn()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const hangleGoToRegister = event => {
        event.preventDefault()

        props.onGoToRegister()
    }

    return <div className="login-page">
        <h1>Login to make GIGA Money💰💶🤑</h1>

        <form onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>

            <button type="submit">Get Rich</button>
        </form>

        <a href="" onClick={hangleGoToRegister}>Register</a>

        <img src="public/login.jpeg" alt="login" width="500" height="500"></img>
        <div className="audio-login off">
            <audio src="public/logins.mp3" controls autoPlay loop>
            Your browser does not support the audio element.
            </audio>
        </div>
    </div>
}

export default Login