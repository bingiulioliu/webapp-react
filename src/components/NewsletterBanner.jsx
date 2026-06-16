import { useEffect } from "react";
import { useState } from "react";
import { NewsletterContext } from "../contexts/NewsletterContext";
import { useNewsletter } from "../hooks/useNewsletter.js"

function NewsletterBanner() {
    const { hideBanner } = useNewsletter();
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.prevent.default;

        if (!email.trim()) return;

        try {
            console.log(`Grazie per la registrazione! Presto ti arriverà una email a ${email}`);
            hideBanner();
        } catch (error) {
            console.log(error);
        }
    };

    return <>
        <div className="bg-dark text-white p-3 fixed-bottom shadow-lg d-flex justify-content-between align-items-center animate__animated animate__fadeInUp">
            <div className="d-flex align-items-center gap-3 w-100 justify-content-center">
                <span className="fw-medium">Iscriviti alla nostra newsletter patatosa! 🥔</span>

                <form onSubmit={handleSubmit} className="d-flex gap-2">
                    <input
                        type="email"
                        required
                        placeholder="Inserisci la tua mail"
                        className="form-control form-control-sm rounded-pill px-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn btn-warning btn-sm rounded-pill px-3 fw-bold">
                        Invia
                    </button>
                </form>
            </div>

            {/* Bottone di chiusura manuale (X) */}
            <button
                type="button"
                className="btn btn-link text-white text-decoration-none fw-bold fs-4 p-0 line-height-1"
                onClick={hideBanner}
                aria-label="Chiudi banner"
            >
                &times;
            </button>
        </div>
    </>
}

export default NewsletterBanner;