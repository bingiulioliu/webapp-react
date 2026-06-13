import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ForkKnife } from "react-bootstrap-icons";
import fetchLatestFive from "../utils/fetchLatestFive.js";
import ProductCard from "../components/ProductCard.jsx";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchLatestFive()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Errore nel recupero prodotti:", err));
  }, []);

  return (
    <main className="home-page">
      <div className="container py-5">
        <section className="home-hero">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <span className="home-pill">
                Il regno ufficiale della patata
              </span>

              <h1 className="home-title titles-font">
                Friestore
              </h1>

              <h2 className="home-claim titles-font">
                Verso l&apos;infarto e oltre
              </h2>

              <p className="home-subtitle">
                Fritte, al forno, ripiene o croccanti: qui le patate non sono
                un contorno. Sono protagoniste, dive, leggende dorate.
              </p>

              <div className="home-hero-actions">
                <a href="#latest-products" className="btn btn-home-primary">
                  Le più nuove
                </a>

                <Link to="/products" className="btn btn-home-secondary">
                  Vai al menu
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <div className="home-mascot-card">
                <img
                  src="/img/logo_sito_senza_scritta_ingrandito.png"
                  alt="Mascotte Friestore"
                  className="home-mascot-img"
                />

                <div className="home-mascot-badge">
                  🥔 Pata energia pura
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-welcome text-center">
          <div className="home-welcome-icon">
            <ForkKnife size={28} />
          </div>

          <span className="home-kicker">
            Benvenuti nel regno
          </span>

          <h2 className="titles-font">
            Benvenuti da Friestore
          </h2>

          <p>
            Qui celebriamo la patata in tutte le sue forme: dorata, croccante,
            cremosa, ripiena e speziata. Ogni prodotto nasce da ingredienti
            semplici, ricette golose e nomi volutamente esagerati, perché una
            patata fatta bene merita rispetto, applausi e magari anche una
            standing ovation.
          </p>
        </section>

        <section id="latest-products" className="home-latest-products">
          <div className="home-section-heading text-center mx-auto">
            <span className="home-kicker">
              Appena sfornate
            </span>

            <h2 className="titles-font">
              Novità
            </h2>

            <p>
              Le ultime arrivate nel nostro tempio del tubero: nuove, dorate e
              pronte a conquistare il tuo carrello.
            </p>
          </div>

          {products && products.length > 0 ? (
            <div className="latest-products-grid">
              {products.map((product) => (
                <div key={product.id} className="latest-product-col">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="home-loading-products text-center">
              <div className="home-loading-icon">
                🍟
              </div>

              <p>
                Caricamento delle delizie in corso...
              </p>
            </div>
          )}
        </section>

        <section className="home-final-cta text-center">
          <div className="home-final-icon">
            🔥
          </div>

          <h2 className="titles-font">
            Hai fame di gloria?
          </h2>

          <p>
            Scopri tutto il menu patatoso e trova la tua prossima ossessione
            croccante.
          </p>

          <Link to="/products" className="btn btn-home-final">
            Esplora tutti i prodotti
          </Link>
        </section>
      </div>
    </main>
  );
}

export default HomePage;