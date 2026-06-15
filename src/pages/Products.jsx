import ProductList from "../components/ProductList.jsx";
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";

function Products() {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <main className="products-page">
      <div className="container py-5">
        <section className="products-hero text-center mx-auto">
          <span className="products-pill">
            Catalogo ufficiale
          </span>

          <h1 className="products-title">
            Il menu patatoso
          </h1>

          <p className="products-subtitle">
            Una selezione solenne, croccante e leggermente drammatica delle
            nostre migliori creazioni. Sfoglia, cerca e trova la tua prossima
            ossessione a base di patate.
          </p>

          <div className="products-info d-flex justify-content-center flex-wrap gap-3 mt-4">
            <span>🥔 Prodotti selezionati</span>
            <span>⭐ Recensioni reali</span>
            <span>🔥 Croccantezza garantita</span>
          </div>
        </section>

        <section className="products-search-section">
          <div className="products-search-heading text-center">
            <span>Cerca nel regno</span>
            <h2>Trova la tua patata ideale</h2>
          </div>

          <SearchBar setIsSearching={setIsSearching} />
        </section>

        {!isSearching && (
          <section className="products-list-section">
            <div className="products-list-heading">
              <span>Le nostre creazioni</span>
              <h2>Tutti i prodotti</h2>
              <p>
                Dal fritto classico alle specialità più ribelli: qui trovi tutto
                quello che il regno patatoso ha da offrire.
              </p>
            </div>

            <ProductList />
          </section>
        )}

        <section className="products-final-cta text-center">
          <div className="products-final-icon">
            🍟
          </div>

          <h2>
            Hai già scelto la tua preferita?
          </h2>

          <p>
            Le patate non si giudicano solo dalla copertina: entra nei dettagli,
            leggi le recensioni e lasciati guidare dal crunch.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Products;