function CashoutModal(props) {
    console.log('CashoutModal -> render')

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        props.onCashedout()
    }

    return <div className="modal cashout-modal">
        <form className="cashout-form" onSubmit={handleSubmit}>
            <p className='cashout-modul-text'>How much money do you want to withdraw?</p>
            <textarea className="cashout-amount"></textarea>
            <button type="submit">💰</button>
            <button className="cancel-button" onClick={handleCancel}>❌</button>
        </form>
    </div>
}

export default CashoutModal