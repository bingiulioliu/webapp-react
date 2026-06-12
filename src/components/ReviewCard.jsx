function ReviewCard({ review }) {

    return (
        <div className="card border-0 shadow-sm rounded-4 mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fw-bold m-0">{review.title}</h5>
                    <div className="small">{review.rating}/5</div>
                </div>

                <p className="card-text text-secondary mb-3">
                    {review.text_review}
                </p>

                <div className="d-flex align-items-center">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-2"
                        style={{ width: '30px', height: '30px' }}>
                        <span className="small fw-bold">{review.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-muted small">Scritto da <strong>{review.name}</strong></span>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;