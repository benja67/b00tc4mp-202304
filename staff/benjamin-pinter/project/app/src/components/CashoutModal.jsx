import cashout from "../logic/cashout"
import context from '../context'

function CashoutModal(props) {
    console.log('CashoutModal -> render')

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        const amount = Number(event.target.changeCashout.value)

        try {
            cashout(context.token, amount, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onCashedout()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="modal cashout-modal">
        <form className="cashout-form" onSubmit={handleSubmit}>
            <label htmlFor="changeCashout">Enter the amount of money you want to withdraw!</label>
            <input type="number" name="changeCashout" id="changeCashout"></input>
            <button className="submit-button" type="submit">🚀</button>
            <button className="cancel-button" onClick={handleCancel}>❌</button>
        </form>
    </div>
}

export default CashoutModal