import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { fetchProductById } from "../utils/fetch.js";

function productBelongsToCategory(product, category) {
    if (!product.categories) {
        return false;
    }

    const productCategories = product.categories
        .split(",")
        .map((categoryName) => categoryName.trim().toLowerCase());

    // Se 'category' è un oggetto, usiamo category.name, altrimenti usiamo la stringa direttamente
    const targetCategory = category.name ? category.name : category;
    return productCategories.includes(targetCategory.toLowerCase());
}

function CategoryList({ categories, products }) {
    const [ratingsByProductId, setRatingsByProductId] = useState({});

    useEffect(() => {
        async function getProductsRatings() {
            const ratingsData = await Promise.all(
                products.map(async (product) => {
                    const productDetail = await fetchProductById(product.id);
                    return {
                        productId: product.id,
                        averageRating: productDetail?.average_rating ?? null,
                    };
                })
            );

            const ratingsObject = {};

            ratingsData.forEach((item) => {
                ratingsObject[item.productId] = {
                    averageRating: item.averageRating,
                };
            });

            setRatingsByProductId(ratingsObject);
        }

        if (products.length > 0) {
            getProductsRatings();
        }
    }, [products]);

    return (
        <div className="category-sections-wrapper">
            {categories.map((category) => {
                const categoryProducts = products.filter((product) =>
                    productBelongsToCategory(product, category)
                );

                return (
                    <section className="category-products-section" key={category.id}>
                        <div className="category-products-heading">
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                        </div>

                        {categoryProducts.length > 0 ? (
                            <div className="row g-4">
                                {categoryProducts.map((product) => (
                                    /* Aggiunto il wrapper col- per allineare correttamente le card */
                                    <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                                        <ProductCard
                                            product={product}
                                            averageRating={ratingsByProductId[product.id]?.averageRating}
                                            totalReviews={ratingsByProductId[product.id]?.totalReviews}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-category-message">
                                <p>
                                    Nessun prodotto trovato per questa categoria. La dinastia è
                                    ancora in fase di frittura.
                                </p>
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
}

export default CategoryList;