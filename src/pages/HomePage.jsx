import { useEffect, useState } from "react";
import fetchLatestFive from "../utils/fetchLatestFive.js";
import { ForkKnife } from "react-bootstrap-icons";
import ProductCard from "../components/ProductCard.jsx";


function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchLatestFive()
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error("Errore nel recupero prodotti:", err));
  }, []);

  return <>
    <div className="pt-4 hp-introduction row">
      <div className="col-6">
        <h1 className="titles-font">FRIESTORE</h1>
        <h3 className="titles-font">Verso l'infarto e oltre</h3>
        <p>Fritte, al forno, ripiene o croccanti: qui le patate non sono un contorno</p>
        <div className="d-flex justify-content-between">
          <button className="btn-intro-most-loved btn">Le più amate</button>
          <button className="btn-intro-menu btn">Menu</button>
        </div>
      </div>
      <div className="col-6">
        <img src="logo_sito_senza_scritta_ingrandito.png" alt="logo_sito_senza_scritta" className="w-100" />
      </div>
    </div>
    <div className="row hp-welcome text-center d-flex flex-column align-items-center">
      <ForkKnife className="fork-icon" size={20}/>
      <h3 className="titles-font">Benvenuti da Friestore</h3>
      <div className="w-75">
        <p>Qui celebriamo la patata in tutte le sue forme: dorata croccante, cremosa, ripiena e speziata.
          Ogni prodotto nasce da ingredienti semplici, ricette golose e nomi volutamente esagerati, perchè
          una patata fatta bene merita rispetto, applausi e magari anche una standing ovation.
        </p>
      </div>

    </div>
    <div className="my-5">
        <h2 className="titles-font text-center mb-4">Novità</h2>
        
        
        <div className="row justify-content-center g-4">
          {products && products.length > 0 ? (
            products.map(product => (
              // AGGIUNTA LA KEY e un wrapper col per decidere quante card vedere per riga
              <div key={product.id} className="col-12 col-md-4 col-lg-2.4"> 
                <ProductCard product={product}/>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">Caricamento delle delizie in corso...</p>
          )}
        </div>
      </div>

  </>;
}
export default HomePage;