import { Link } from "react-router-dom";

function ChiSiamo() {
    return (
        <main className="about-page">
            <div className="container py-5">
                <section className="about-hero">
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-7">
                            <span className="about-pill">
                                La nostra storia
                            </span>

                            <h1 className="about-title">
                                La nostra storia sacra
                            </h1>

                            <p className="about-subtitle">
                                Dalla terra alla gloria: abbiamo deciso di rendere il mondo un
                                posto più croccante, un tubero alla volta. Patatosa nasce per
                                celebrare la patata in tutte le sue forme: fritta, al forno,
                                rustica, dorata e gloriosamente irresistibile.
                            </p>

                            <div className="about-hero-actions">
                                <a href="#manifesto" className="btn btn-about-primary">
                                    Scopri il manifesto ↓
                                </a>

                                <Link to="/products" className="btn btn-about-secondary">
                                    Guarda i prodotti
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 text-center">
                            <div className="about-mascot-card">
                                <img
                                    src="/img/logo_sito_senza_scritta_ingrandito.png"
                                    alt="Il pata capo"
                                    className="about-mascot-img"
                                />

                                <div className="about-mascot-badge">
                                    🥔 Pata Boss approva
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="manifesto" className="about-manifesto">
                    <div className="about-section-heading text-center mx-auto">
                        <span className="about-kicker">
                            I nostri valori
                        </span>

                        <h2>
                            Il manifesto patatoso
                        </h2>

                        <p>
                            Non vendiamo semplicemente prodotti a base di patate. Difendiamo
                            una filosofia croccante, ironica e profondamente tuberosa.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <article className="about-value-card h-100">
                                <div className="about-value-icon">🌱</div>

                                <h3>Rispetto per il tubero</h3>

                                <p>
                                    Trattiamo ogni patata con la dignità che merita, selezionando
                                    ingredienti semplici e ricette pensate per esaltare il gusto.
                                </p>
                            </article>
                        </div>

                        <div className="col-12 col-md-4">
                            <article className="about-value-card h-100">
                                <div className="about-value-icon">🔊</div>

                                <h3>Crunch infinito</h3>

                                <p>
                                    La croccantezza è una missione seria. Se non fa rumore almeno
                                    fino alla stanza accanto, non è ancora abbastanza Patatosa.
                                </p>
                            </article>
                        </div>

                        <div className="col-12 col-md-4">
                            <article className="about-value-card h-100">
                                <div className="about-value-icon">❤️</div>

                                <h3>Ironia e amore</h3>

                                <p>
                                    Cuciniamo con il sorriso e un pizzico di follia, perché una
                                    patata felice è decisamente più buona.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="about-story-section">
                    <div className="row justify-content-center g-5">


                        <div className="col-12">
                            <span className="about-kicker">
                                Dietro le quinte
                            </span>

                            <h2 className="about-story-title">
                                Una squadra con una missione precisa
                            </h2>

                            <div className="col-12 mb-4">
                                <div className="about-story-image">
                                    <img
                                        src="/img/pata-team.png"
                                        alt="Il Team degli Esperti delle Patate"
                                        className="img-fluid rounded shadow w-100"
                                        style={{ maxHeight: '450px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>

                            <p className="about-story-text">
                                I nostri esperti non mangiano solo patate: le studiano, le
                                sognano e discutono per ore sul grado perfetto di doratura.
                                Ogni prodotto nasce da una domanda semplice: “questa patata può
                                rendere migliore la giornata di qualcuno?”
                            </p>

                            <div className="about-team-grid">
                                <div className="about-team-item">
                                    <strong>🛒 Il Gran Maestro del Forno</strong>
                                    <p>
                                        Controlla le temperature con il potere della mente e un
                                        termometro del 1994.
                                    </p>
                                </div>

                                <div className="about-team-item">
                                    <strong>📐 L’Ingegnere del Fritto</strong>
                                    <p>
                                        Calcola l’angolo di immersione perfetto per una doratura
                                        geometricamente impeccabile.
                                    </p>
                                </div>

                                <div className="about-team-item">
                                    <strong>🧪 Il Sommelier delle Salse</strong>
                                    <p>
                                        Riconosce quarantadue tipi diversi di paprika anche
                                        bendato.
                                    </p>
                                </div>

                                <div className="about-team-item">
                                    <strong>🌿 Il Sussurratore di Patate</strong>
                                    <p>
                                        Parla alle varietà Kennebec per rassicurarle prima del
                                        taglio a fiammifero.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-final-cta text-center">
                    <div className="about-final-icon">
                        🍟
                    </div>

                    <h2>
                        Pronta a entrare nel regno della patata?
                    </h2>

                    <p>
                        Esplora le nostre categorie, scopri i prodotti più croccanti e trova
                        la tua nuova ossessione patatosa.
                    </p>

                    <Link to="/products" className="btn btn-about-final">
                        Esplora i prodotti
                    </Link>
                </section>
            </div>
        </main>
    );
}

export default ChiSiamo;