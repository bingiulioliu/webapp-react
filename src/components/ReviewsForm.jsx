import { useState } from 'react';

function ReviewsForm({ productId, onReviewCreated }) {

    const [formData, setFormData] = useState({
        product_id: productId,
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

        setFormData({
            ...formData,
            [name]: name === "rating" ? Number(value) : value
        });
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
                body: JSON.stringify({
                    ...formData,
                    product_id: productId,
                }),
            });

            const dataResponse = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Recensione inviata con successo!'
                });
                setFormData({
                    product_id: productId,
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
        <section className="review-form-card">
            <div className="review-form-heading">
                <span>La tua opinione</span>

                <h2>Lasciaci una recensione</h2>

                <p>
                    Hai assaggiato questo prodotto? Racconta al popolo patatoso com’è
                    andata.
                </p>
            </div>

            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <label className="form-label review-form-label">
                            Il tuo nome
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={onChangeHandler}
                            className="form-control review-form-input"
                            placeholder="Es. Patatino Rossi"
                            required
                        />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                        <label className="form-label review-form-label">
                            Voto
                        </label>

                        <select
                            name="rating"
                            value={formData.rating}
                            onChange={onChangeHandler}
                            className="form-select review-form-input"
                            required
                        >
                            <option value="5">5 / 5 ⭐</option>
                            <option value="4">4 / 5 ⭐</option>
                            <option value="3">3 / 5 ⭐</option>
                            <option value="2">2 / 5 ⭐</option>
                            <option value="1">1 / 5 ⭐</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label review-form-label">
                        Titolo recensione
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={onChangeHandler}
                        className="form-control review-form-input"
                        placeholder="Es. Croccantezza memorabile"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label review-form-label">
                        Il tuo pensiero patatoso
                    </label>

                    <textarea
                        name="text_review"
                        value={formData.text_review}
                        onChange={onChangeHandler}
                        className="form-control review-form-input"
                        rows="5"
                        placeholder="Scrivi qui la tua recensione..."
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-review-submit w-100">
                    Invia recensione ⭐
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