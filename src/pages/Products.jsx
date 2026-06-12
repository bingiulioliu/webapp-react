import { useState } from "react";
import ProductList from "../components/ProductList.jsx";

function Products() {

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

        <ProductList/>

        
      </div>
    </section>
  );
}

export default Products;