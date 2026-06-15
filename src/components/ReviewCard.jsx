function ReviewCard({ review }) {
    const userInitial = review.name
        ? review.name.charAt(0).toUpperCase()
        : "?";

    const isoDate = review.created_at;
    const formattedDate = new Date(isoDate).toLocaleString('it-IT',{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    return (
        <article className="review-card">
            <div className="review-card-header">
                <div>
                    <h3 className="review-card-title">
                        {review.title}
                    </h3>
                </div>

                <div className="review-rating-badge">
                    {review.rating}/5 ⭐
                </div>
            </div>

            <p className="review-card-text">
                “{review.text_review}”
            </p>

            <div className="review-card-author">
                <div className="review-avatar">
                    {userInitial}
                </div>

                <div>
                    <span className="review-author-label">
                        Scritto da
                    </span>

                    <strong className="review-author-name">
                        {review.name}
                    </strong>
                    <span className="review-author-label">
                        il {formattedDate}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default ReviewCard;