import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import fetchProducts from "../utils/fetchProducts.js";

function ProductList({ activeCategory, isSearching }) {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const listRef = useRef(null);
    const limit = 10;

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);

        setTimeout(() => {
            listRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    };

    useEffect(() => {
        fetchProducts(currentPage, limit)
            .then((data) => {
                setProducts(data.data);
                setPagination(data.pagination);
            })
            .catch((err) => console.error("Errore nel recupero prodotti:", err));
    }, [currentPage]);

    const filteredProducts =
        activeCategory === "Tutti"
            ? products
            : products.filter((product) => product.category === activeCategory);

    if (isSearching) {
        return null;
    }

    return (
        <>
            <div ref={listRef} className="row g-4">
                {products.map((product) => (
                    <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {pagination && pagination.totalPages > 1 && (
                <nav className="mt-5" aria-label="Paginazione prodotti">
                    <ul className="pagination justify-content-center flex-wrap gap-2">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => changePage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Precedente
                            </button>
                        </li>

                        {Array.from({ length: pagination.totalPages }, (_, index) => {
                            const pageNumber = index + 1;

                            return (
                                <li
                                    key={pageNumber}
                                    className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => changePage(pageNumber)}
                                    >
                                        {pageNumber}
                                    </button>
                                </li>
                            );
                        })}

                        <li className={`page-item ${currentPage === pagination.totalPages ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => changePage(currentPage + 1)}
                                disabled={currentPage === pagination.totalPages}
                            >
                                Successiva
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default ProductList;