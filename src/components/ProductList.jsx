import ProductCard from "./ProductCard.jsx";
import { useEffect, useState } from "react";
import fetchProducts from "../utils/fetchProducts.js";

function ProductList({ activeCategory }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((res) => {
            if (res && res.data) {
                setProducts(res.data);
            }
        });
    }, []);

    const filteredProducts =
        activeCategory === "Tutti"
            ? products
            : products.filter((product) => product.category === activeCategory);

    return (
        <div className="row g-4">
            {filteredProducts.map((product) => (
                <div className="col-12 col-md-6 col-lg-3" key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;