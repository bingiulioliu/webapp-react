import ReviewCard from "./ReviewCard.jsx";

function ReviewList({ reviews = [] }) {
    return (
        <section className="reviews-list-section">
            <div className="reviews-list-header">
                <span className="reviews-list-kicker">
                    Opinioni croccanti
                </span>

                <h2>
                    Cosa dicono i nostri clienti
                </h2>

                <p>
                    Recensioni vere dal popolo patatoso: entusiasmo, consigli e giudizi
                    direttamente da chi ha già assaggiato.
                </p>
            </div>

            {reviews.length > 0 ? (
                <div className="row g-4">
                    {reviews.map((review) => (
                        <div className="col-12 col-lg-6" key={review.id}>
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="reviews-empty">
                    <div className="reviews-empty-icon">
                        🥔
                    </div>

                    <h3>Ancora nessuna recensione</h3>

                    <p>
                        Questo prodotto aspetta il suo primo assaggiatore coraggioso.
                    </p>
                </div>
            )}
        </section>
    );
}

export default ReviewList;