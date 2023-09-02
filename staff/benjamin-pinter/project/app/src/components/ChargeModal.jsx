
function ChargeModal(props) {
    console.log('ChargeModal -> render')

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        props.onCharged()
    }

    return <div className="modal charge-modal">
        <form className="charge-form" onSubmit={handleSubmit}>
            <p className='charge-modul-text'>Enter the amount of money you want to charge your account with!</p>
            <textarea className="charge-amount"></textarea>
            <button type="submit">🚀</button>
            <button className="cancel-button" onClick={handleCancel}>❌</button>
        </form>
    </div>
}

export default ChargeModal