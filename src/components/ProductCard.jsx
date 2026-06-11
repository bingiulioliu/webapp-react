import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
            <div className="position-relative bg-warning-subtle">
                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top product-card-img"
                />

                {product.available ? (
                    <span className="badge text-bg-success position-absolute top-0 end-0 m-3 rounded-pill">
                        Disponibile
                    </span>
                ) : (
                    <span className="badge text-bg-danger position-absolute top-0 end-0 m-3 rounded-pill">
                        Terminato
                    </span>
                )}
            </div>

            <div className="card-body d-flex flex-column">
                <span className="badge text-bg-warning align-self-start mb-3 rounded-pill">
                    {product.category || "Patatosa"}
                </span>

                <h3 className="card-title h5 fw-bold">
                    {product.name}
                </h3>

                <p className="card-text text-muted flex-grow-1">
                    {product.description}
                </p>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold fs-5 text-brown">
                        € {Number(product.price).toFixed(2).replace(".", ",")}
                    </span>

                    <Link
                        to={`/products/${product.id}`}
                        className="btn btn-dark rounded-pill px-4"
                    >
                        Scopri
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;