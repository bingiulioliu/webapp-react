

function ChiSiamo() {
    return <>

        <main className="container py-5">
            {/* La Nostra Storia */}
            <section className="row align-items-center bg-light p-4 rounded mb-5">
                <div className="col-md-8">
                    <span className="text-uppercase text-muted fw-bold small">La nostra storia</span>
                    <h1 className="display-4 fw-bold">La Nostra <span className="text-danger">Storia Sacra</span></h1>
                    <p className="lead">Dalla terra alla gloria: come abbiamo deciso di rendere il mondo un posto più croccante, un tubero alla volta.</p>
                    <button className="btn btn-dark btn-lg mt-3">Scopri di più ↓</button>
                </div>
                <div className="col-md-4 text-center">
                    <img src="pata-boss.png" alt="Il pata capo" className="img-fluid" style={{ maxWidth: '200px' }} />
                </div>
            </section>

            {/* Il Manifesto Patatoso */}
            <section className="text-center mb-5">
                <h2 className="mb-4">Il Manifesto Patatoso</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card h-100 border-0 bg-light p-3">
                            <div className="h3">🌱</div>
                            <h5>Rispetto per il Tubero</h5>
                            <p>Trattiamo ogni patata con la dignità che merita, selezionando solo le migliori terre vulcaniche.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 bg-light p-3">
                            <div className="h3">🔊</div>
                            <h5>Crunch Infinito</h5>
                            <p>La croccantezza è una scienza esatta. Se non fa rumore fino alla stanza accanto, non è Patatosa.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 bg-light p-3">
                            <div className="h3">❤️</div>
                            <h5>Ironia e Amore</h5>
                            <p>Cuciniamo con il sorriso e un pizzico di follia, perché una patata felice è decisamente più buona.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* La Squadra */}
            <section className="border border-2 rounded p-4">
                <h2 className="mb-3">La Squadra</h2>
                <p>I nostri esperti non mangiano solo patate, le sognano di notte. Ecco i volti dietro al fritto perfetto.</p>

                <div className="row align-items-center">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <img src="pata-team.jpg" alt="La Squadra patatosa" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <p><strong>🛒 Il Gran Maestro del Forno</strong><br /><small>Controlla le temperature con il potere della mente e un termometro del 1994.</small></p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <p><strong>📐 L'Ingegnere del Fritto</strong><br /><small>Calcola l'angolo di immersione perfetto per una doratura geometricamente impeccabile.</small></p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <p><strong>🧪 Il Sommelier delle Salse</strong><br /><small>Riconosce 42 tipi diversi di paprika bendato e con le mani legate.</small></p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <p><strong>🌿 Il Sussurratore di Patate</strong><br /><small>Parla alle varietà Kennebec per rassicurarle prima del taglio a fiammifero.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </>
}

export default ChiSiamo;