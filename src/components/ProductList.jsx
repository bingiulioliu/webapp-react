import ProductCard from "./ProductCard.jsx";
import { useEffect, useState } from "react";
import fetchProducts from "../utils/fetchProducts.js";

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetchProducts().then(res => {
            if (res && res.data) {
                setProducts(res.data);
            } 
        });
    }, []);

    return (
        <div className='container'>
            {products.map(product => {
                return <ProductCard product={product}/>
            })}
            <pre>{JSON.stringify(products)}</pre>
        </div>
    )
}

export default ProductList;