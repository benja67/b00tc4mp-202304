import chargeBalance from "../logic/chargeBalance"
import context from '../context'

function ChargeModal(props) {
    console.log('ChargeModal -> render')

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        const additional = Number(event.target.changeCharge.value)

        try {
            chargeBalance(context.token, additional, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onCharged()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="modal charge-modal">
        <form className="charge-form" onSubmit={handleSubmit}>
            <label htmlFor="changeCharge">Enter the amount of money you want to charge your account with!</label>
            <input type="number" name="changeCharge" id="changeCharge"></input>
            <button className="submit-button" type="submit">🚀</button>
            <button className="cancel-button" onClick={handleCancel}>❌</button>
        </form>
    </div>
}

export default ChargeModal