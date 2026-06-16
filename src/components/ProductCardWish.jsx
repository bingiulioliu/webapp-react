import { Link } from "react-router-dom";
import { useContext } from "react"; // <--- Importiamo useContext standard
import { WishContext } from "../contexts/wishlistContext.jsx"; // <--- Importiamo il Context
import { Trash } from "react-bootstrap-icons";

function ProductCardWish({ product }) {
    // Usiamo useContext normalmente per prendere l'handler
    const { addWishHandler } = useContext(WishContext);

    // Gestione delle categorie
    const categoryLabel = Array.isArray(product.categories)
        ? product.categories.map((category) => category.name).join(", ")
        : product.categories || product.category || "Patatosa";

    // Gestione dell'immagine
    const imageSrc = product.image?.startsWith("http")
        ? product.image
        : `/img/${product.image}`;

    // Gestione del rating
    const ratingData = product.average_rating;
    let formattedRating = 'Nessun voto';
    if (ratingData !== null && ratingData !== undefined) {
        formattedRating = Number(ratingData).toFixed(1).replace(".", ",");
    }

    return (
        <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
            <div className="position-relative bg-warning-subtle p-3 pt-4">
                {product.image ? (
                    <img
                        src={imageSrc}
                        alt={product.name}
                        className="card-img-top product-card-img w-100"
                    />
                ) : (
                    <div className="product-card-placeholder">🥔</div>
                )}

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
                
                <span 
                    className="put-like align-self-end text-danger" 
                    onClick={(e) => {
                        e.stopPropagation();
                        // Passiamo false per rimuovere l'elemento dal Context
                        addWishHandler(product, false);
                    }}
                >
                    <Trash width={28} height={28}/>
                </span> 

                <span className="badge text-bg-warning align-self-start mb-3 rounded-pill text-wrap">
                    {categoryLabel}
                </span>

                <h3 className="card-title h5 fw-bold">{product.name}</h3>

                <div className="product-rating mb-3">
                    {formattedRating !== 'Nessun voto' ? (
                        <span className="value">{formattedRating} / 5 ⭐</span>
                    ) : (
                        <span className="value">Nessun voto</span>
                    )}
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold fs-5 text-brown">
                        € {Number(product.price).toFixed(2).replace(".", ",")}
                    </span>

                    <Link to={`/products/${product.id}`} className="btn btn-dark rounded-pill px-4" data-bs-dismiss="offcanvas">
                        Scopri
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProductCardWish;