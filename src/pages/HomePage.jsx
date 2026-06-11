import { useEffect } from "react";
import { fetchProducts } from "../utils/fetch";
import { data } from "react-router";
import { useState } from "react";


function HomePage() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data)
      console.table(data);
    });
  }, []);

  return <>
    <h1>Home</h1>
    <pre>
      {products ? JSON.stringify(products, null, 2) : "Caricamento in corso..."}
    </pre>
  </>;
}
export default HomePage;