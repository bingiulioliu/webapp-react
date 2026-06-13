import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/fetch.js";
import fetchProducts from "../utils/fetchProducts.js";
import CategoryList from "../components/CategoryList.jsx";

function Categories() {
    const choices = [
        "In offerta",
        "Novità",
        "Più venduti",
        "Biologico",
        "Specialità locali",
    ];

    const [activeChoice, setActiveChoice] = useState("In offerta");
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getPageData() {
            const categoriesData = await fetchCategories();
            const productsData = await fetchProducts();

            if (categoriesData) {
                setCategories(categoriesData);
            }

            if (productsData && productsData.data) {
                setProducts(productsData.data);
            }

            setIsLoading(false);
        }

        getPageData();
    }, []);

    return (<>
        <section className="categories-page">
            <div className="container">
                <section className="categories-hero text-center mx-auto">
                    <span className="categories-pill">
                        Il grande libro dei tuberi
                    </span>

                    <h1 className="categories-title">
                        Le sante dinastie del tubero
                    </h1>

                    <p className="categories-subtitle">
                        Non tutte le patate sono nate uguali. Ogni categoria ha un’anima,
                        un destino e una missione: renderti felice. Esplora le nostre
                        collezioni.
                    </p>

                    <div className="d-flex justify-content-center flex-wrap gap-4 mt-4 categories-info">
                        <span>🥔 100% golosità</span>
                        <span>🔥 Origine controllata</span>
                    </div>
                </section>
                <div className="categories-filter-wrapper d-flex justify-content-center flex-wrap gap-3 mb-5">
                    {choices.map((choice) => (
                        <button
                            key={choice}
                            type="button"
                            className={
                                activeChoice === choice
                                    ? "btn filter-btn active"
                                    : "btn filter-btn"
                            }
                            onClick={() => setActiveChoice(choice)}
                        >
                            {choice}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="text-center py-5">
                        <p>Caricamento categorie patatose...</p>
                    </div>
                ) : (
                    <CategoryList categories={categories} products={products} choice={activeChoice}/>
                )}

                <section className="categories-final-cta text-center mt-5">
                    <h2>Trova la tua anima gemella</h2>

                    <p>
                        Sei una patata ribelle da friggere o una saggia matrona da forno?
                        Fai il nostro test rapido.
                    </p>

                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <button className="btn btn-category-main">
                            Inizia il test
                        </button>

                        <button className="btn btn-category-secondary">
                            Scegli a caso
                        </button>
                    </div>
                </section>
            </div>
        </section>
    </>
    );
}

export default Categories;