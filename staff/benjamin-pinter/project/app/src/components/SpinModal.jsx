import spinGamble from "../logic/spinGamble"
import context from '../context'

function SpinModal(props) {
    console.log('SpinModal -> render')

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

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
            <img src="public/spin.jpg" alt="spin" width="700" height="700"></img>
            <div className="audio-spin off">
                <audio src="public/spin.mp3" controls autoPlay>
                 Your browser does not support the audio element.
                 </audio>
            </div>
            <button className="spin-button" type="submit">➡️🎰⬅️</button>
            <button className="cancel-spin-button" onClick={handleCancel}>❌</button>
        </form>
    </div>
}

export default SpinModal