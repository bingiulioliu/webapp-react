import { useState } from 'react';

function ReviewsForm() {

    const [formData, setFormData] = useState({
        product_id: 1,
        name: '',
        title: '',
        rating: 5,
        text_review: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setStatus({
            type: 'info',
            message: 'Invio in corso...'
        });

        try {
            const url = 'http://localhost:3000';
            const response = await fetch(`${url}/reviews`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const dataResponse = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Recensione inviata con successo!'
                });
                setFormData({
                    product_id: 1,
                    name: '',
                    title: '',
                    rating: 5,
                    text_review: ''
                });
            } else {
                setStatus({
                    type: 'danger',
                    message: `Errore: ${dataResponse.error}`
                });
            }
        } catch (error) {
            console.error(error);
            setStatus({
                type: 'danger',
                message: 'Errore di rete: server offline.'
            });
        }
    };

    return (
        <section className="contacts-card contacts-form-card h-100">
            <div className="contacts-card-heading">
                <span className="contacts-card-icon">✏️</span>
                <div>
                    <span className="contacts-kicker">Scrivici</span>
                    <h2>Lasciaci una recensione</h2>
                </div>
            </div>

            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label contacts-label">Inserisci il tuo nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChangeHandler}
                        className="form-control contacts-input"
                        placeholder="oppure il tuo indirizzo di casa"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label contacts-label">Titolo del messaggio:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={onChangeHandler}
                        className="form-control contacts-input"
                        placeholder="Stai attento a ciò che scrivi"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label contacts-label">Il tuo pensiero patatoso:</label>
                    <textarea
                        name="text_review"
                        value={formData.text_review}
                        onChange={onChangeHandler}
                        className="form-control contacts-input"
                        rows="5"
                        placeholder="Le patate offese non si fanno scrupoli..."
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-contact-primary w-100">
                    Invia il tuo messaggio patatoso!
                </button>
            </form>

            {status.message && (
                <div className={`alert alert-${status.type} mt-3 text-center`} role="alert">
                    {status.message}
                </div>
            )}
        </section>
    );
}

export default ReviewsForm;