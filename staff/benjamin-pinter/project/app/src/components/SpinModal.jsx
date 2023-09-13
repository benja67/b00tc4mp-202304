import spinGamble from "../logic/spinGamble"
import context from '../context'

function SpinModal(props) {
    console.log('SpinModal -> render')

    const handleSubmit = event => {
        event.preventDefault()

        try {
            spinGamble(context.token, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onSpinned()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="modal spin-modal">
        <form className="spin-form" onSubmit={handleSubmit}>
            <img src="public/youlose.jpg" alt="spin" width="800" height="800"></img>
            <div className="audio-spin off">
                <audio src="public/lose.mp3" controls autoPlay>
                 Your browser does not support the audio element.
                 </audio>
            </div>
            <button type="submit">Continue</button>
        </form>
    </div>
}

export default SpinModal