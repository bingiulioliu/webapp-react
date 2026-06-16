import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../utils/fetch.js";
import ReviewList from "../components/ReviewsList.jsx";
import ReviewsForm from "../components/ReviewsForm.jsx";

function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getProduct() {
            const productData = await fetchProductById(id);

            if (productData) {
                setProduct(productData);
            }

            setIsLoading(false);
        }

        getProduct();
    }, [id]);

    if (isLoading) {
        return (
            <section className="product-detail-page">
                <div className="container py-5">
                    <p>Caricamento prodotto...</p>
                </div>
            </section>
        );
    }

    if (!product) {
        return (
            <section className="product-detail-page">
                <div className="container py-5 text-center">
                    <h1>Prodotto non trovato</h1>
                    <p>Questa patata forse è rotolata via.</p>

                    <Link to="/products" className="btn btn-home-products">
                        Torna ai prodotti
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="product-detail-page">
            <div className="container py-5">
                <Link to="/products" className="back-link">
                    ← Torna ai prodotti
                </Link>

                <div className="row align-items-center g-5 mt-3">
                    <div className="col-12 col-lg-6">
                        <div className="product-detail-image">
                            {product.image ? (
                                <img src={`/img/${product.image}`} alt={product.name} />
                            ) : (
                                <span>🥔</span>
                            )}
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <span className="product-detail-category">
                            {product.categories?.map((category) => category.name).join(", ")}
                        </span>

                        <h1 className="product-detail-title">{product.name}</h1>

                        <p className="product-detail-price">
                            € {Number(product.price).toFixed(2).replace(".", ",")}
                        </p>

                        <p className="product-detail-description">
                            {product.description}
                        </p>

                        {product.ingredient && (
                            <div className="product-detail-box">
                                <h2>Ingredienti</h2>
                                <p>{product.ingredient}</p>
                            </div>
                        )}

                        <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                            {product.available ? (
                                <span className="detail-status available">🟢Disponibile</span>
                            ) : (
                                <span className="detail-status unavailable">🔴Terminato</span>
                            )}

                            {product.in_stock !== undefined && (
                                <span className="detail-stock">
                                    Scorte: {product.in_stock}
                                </span>
                            )}
                        </div>
                        <div className="mt-3">
                            <div className="stat-item">
                                <span className="label">Valutazione media:</span>
                                <span className="value"> {product.average_rating} / 5 ⭐</span>
                            </div>
                            <div className="stat-item">
                                <span className="label">Totale recensioni:</span>
                                <span className="value"> {product.total_reviews}</span>
                            </div>
                        </div>
                    </div>
                    <ReviewsForm productId={product.id} />
                    
                    <ReviewList reviews={product.reviews} />
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;