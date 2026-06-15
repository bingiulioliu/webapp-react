import ReviewsForm from "../components/ReviewsForm.jsx"; 

function Contacts() {
    return (
        <main className="contacts-page">
            <div className="container py-5">
                <section className="contacts-hero text-center mx-auto">
                    <span className="contacts-pill">
                        Servizio clienti patatoso
                    </span>

                    <h1 className="contacts-title">
                        Parliamo di patate
                    </h1>

                    <p className="contacts-subtitle">
                        Hai un dubbio esistenziale sulla frittura? Vuoi dichiarare il tuo
                        amore per una nostra ricetta? Siamo qui per te: nessuna domanda è
                        troppo sciocca se riguarda i tuberi.
                    </p>
                </section>

                <div className="row g-4 align-items-stretch">
                {/* componente form recensioni */}
                    <div className="col-12 col-lg-7">
                        <ReviewsForm />
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className="d-flex flex-column gap-4 h-100">
                            <section className="contacts-card contacts-info-card">
                                <span className="contacts-kicker">Dove trovarci</span>

                                <h2>La tana del tubero</h2>

                                <ul className="contacts-info-list">
                                    <li>
                                        <span className="contacts-info-icon">📍</span>

                                        <div>
                                            <strong>Sede centrale</strong>
                                            <p>
                                                Via delle Patate Dorate 12, 38122 Versolinfinitoeoltre
                                                (VIO)
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <span className="contacts-info-icon">📧</span>

                                        <div>
                                            <strong>Email</strong>
                                            <p>info@patatosa.it</p>
                                        </div>
                                    </li>

                                    <li>
                                        <span className="contacts-info-icon">📞</span>

                                        <div>
                                            <strong>Call center patatoso</strong>
                                            <p>+39 0461 123456</p>
                                        </div>
                                    </li>
                                </ul>
                            </section>

                            <section className="contacts-card contacts-social-card text-center">
                                <span className="contacts-kicker">Social golosi</span>

                                <h2>Seguici online</h2>

                                <div className="contacts-social-links">
                                    <span>Instagram</span>
                                    <span>Facebook</span>
                                    <span>TikTok</span>
                                </div>
                            </section>

                            <section className="contacts-map-card">
                                <div className="contacts-map-icon">🗺️</div>
                                <div>
                                    <img src="/img/mappa_ristorante.png" alt="" className="mappa-ristorante"/>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <section className="contacts-support text-center">
                    <div className="contacts-support-icon">✅</div>

                    <h2>Supporto 24/7, quasi</h2>

                    <p>
                        Rispondiamo sempre, tranne quando stiamo mangiando patatine fritte.
                        Cioè spesso. Ma abbi fede.
                    </p>
                </section>
            </div>
        </main>
    );
}

export default Contacts;