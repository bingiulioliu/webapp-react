import ProductCard from "./ProductCard.jsx";


function productBelongsToCategory(product, category) {
    if (!product.categories) {
        return false;
    }


    const productCategories = product.categories
        .split(",")
        .map((categoryName) => categoryName.trim().toLowerCase());

    return productCategories.includes(category.toLowerCase());
}

function CategoryList({ categories, products, choices }) {


    const selectedCategories = categories.filter((category) =>
        choices.includes(category.name)
    );

    const categoryProducts = products.filter((product) =>
        selectedCategories.some((cat) =>
            productBelongsToCategory(product, cat.name)
        )
    );

    return (
        <div className="category-sections-wrapper">
            <section className="category-products-section" key={choices.join("-")}>

                {categoryProducts.length > 0 ? (
                    <div className="row g-4">
                        {categoryProducts.map((product) => (
                            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-category-message">
                        <div className="empty-category-icon">🍟</div>
                        <p>
                            Nessun prodotto trovato per questa categoria. La dinastia è
                            ancora in fase di frittura.
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default CategoryList;