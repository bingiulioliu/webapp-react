
function Contacts() {
    return <>
        <main className="container py-5">
            {/* Intestazione Pagina */}
            <section className="text-center mb-5">
                <h1 className="display-4 fw-bold">Parliamo di Patate</h1>
                <p className="lead text-muted">
                    Hai un dubbio esistenziale sulla frittura? Vuoi dichiarare il tuo amore per una nostra ricetta?<br />
                    <strong>Siamo qui per te!</strong> Nessuna domanda è troppo sciocca se riguarda i tuberi.
                </p>
            </section>

            <div className="row g-4">
                {/* Colonna Sinistra: Form Contatti */}
                <div className="col-lg-7">
                    <div className="card border-0 bg-light p-4 shadow-sm">
                        <h3 className="mb-4">✏️ Scrivici un messaggio</h3>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Il tuo Nome</label>
                                    <input type="text" className="form-control" placeholder="Ex. Patatino Rossi" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email Golosa</label>
                                    <input type="email" className="form-control" placeholder="patata@esempio.it" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tuo Pensiero Patatoso</label>
                                <textarea className="form-control" rows="4" placeholder="Raccontaci tutto: dai complimenti alle critiche costruttive (ma sii gentile, le patate hanno sentimenti)"></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning w-100 fw-bold">Invia il Messaggio ✉️</button>
                        </form>
                    </div>
                </div>

                {/* Colonna Destra: Info e Social */}
                <div className="col-lg-5">
                    {/* Box Informazioni */}
                    <div className="card border-0 bg-dark text-white p-4 mb-4">
                        <h4 className="mb-3">Dove trovarci</h4>
                        <ul className="list-unstyled">
                            <li className="mb-3">📍 <strong>SEDE CENTRALE</strong><br />Via delle Patate Dorate 12, 38122 Versolinfinitoeoltre (VIO)</li>
                            <li className="mb-3">📧 <strong>EMAIL</strong><br />info@patatosa.it</li>
                            <li>📞 <strong>CALL CENTER PATATOSO</strong><br />+39 0461 123456</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="card border-0 bg-light p-4 text-center mb-4">
                        <h5>Social Golosi</h5>
                        <div className="d-flex justify-content-center gap-4 mt-3">
                            <span>Instagram</span>
                            <span>Facebook</span>
                            <span>TikTok</span>
                        </div>
                    </div>

                    {/* Mappa placeholder */}
                    <div className="bg-secondary rounded p-5 text-center text-white">
                        [Mappa qui]
                    </div>
                </div>
            </div>

            {/* Supporto 24/7 */}
            <section className="mt-5 text-center p-4 border border-warning border-dashed rounded">
                <h5>✅ Supporto 24/7 (quasi)</h5>
                <p className="mb-0">Rispondiamo sempre, tranne quando stiamo mangiando patatine fritte. Cioè spesso, ma abbi fede!</p>
            </section>
        </main>
    </>
}

export default Contacts;