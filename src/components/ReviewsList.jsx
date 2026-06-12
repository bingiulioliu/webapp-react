import { useState } from "react"
import { fetchProductById } from "../utils/fetch"
import ReviewCard from "./ReviewCard"
import { useEffect } from "react";

function ReviewList({reviews}) {

    return <>
        <section className="mt-5">
            <h4 className="mb-4">Cosa dicono i nostri clienti</h4>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))
            ) : (
                <p className="text-muted">Ancora nessuna recensione per questo prodotto.</p>
            )}
        </section>
    </>
};

export default ReviewList;