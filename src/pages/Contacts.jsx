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
                    <div className="col-12 col-lg-7">
                        <section className="contacts-card contacts-form-card h-100">
                            <div className="contacts-card-heading">
                                <span className="contacts-card-icon">✏️</span>

                                <div>
                                    <span className="contacts-kicker">Scrivici</span>
                                    <h2>Mandaci un messaggio</h2>
                                </div>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <label className="form-label contacts-label">
                                            Il tuo nome
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control contacts-input"
                                            placeholder="Es. Patatino Rossi"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <label className="form-label contacts-label">
                                            Email golosa
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control contacts-input"
                                            placeholder="patata@esempio.it"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label contacts-label">
                                        Il tuo pensiero patatoso
                                    </label>

                                    <textarea
                                        className="form-control contacts-input"
                                        rows="5"
                                        placeholder="Raccontaci tutto: complimenti, dubbi, critiche costruttive o dichiarazioni d’amore alle patatine."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-contact-primary w-100">
                                    Invia il messaggio ✉️
                                </button>
                            </form>
                        </section>
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