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

function CategoryList({ categories, products, choice }) {

    
    const currentCategory = categories.find((category) => category.name.toLowerCase() === choice.toLowerCase());


    if (!currentCategory) {
        return (
            <div className="text-center p-5">
                <p>Seleziona una categoria per visualizzare le nostre patate deliziose!</p>
            </div>
        );
    }

    const categoryProducts = products.filter((product) =>
        productBelongsToCategory(product, currentCategory.name)
    );

    return (
        <div className="category-sections-wrapper">
            <section className="category-products-section" key={currentCategory.id}>
                <div className="category-products-heading">
                    <h2 className="titles-font">{currentCategory.name}</h2>
                    <p>{currentCategory.description}</p>
                </div>

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