import { useState } from "react";
import ProductList from "../components/ProductList.jsx";

function Products() {
  const categories = [
    "Tutti",
    "Fritte",
    "Al forno",
    "Ripiene",
    "Specialità croccanti",
    "Edizioni rustiche",
  ];

  const [activeCategory, setActiveCategory] = useState("Tutti");

  return (
    <section className="products-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="products-title">Il menu patatoso</h1>

          <p className="products-subtitle mx-auto">
            Una selezione solenne, croccante e leggermente drammatica delle
            nostre migliori creazioni.
          </p>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "btn filter-btn active"
                  : "btn filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductList activeCategory={activeCategory} />

        
      </div>
    </section>
  );
}

export default Products;