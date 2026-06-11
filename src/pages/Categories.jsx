import { useEffect } from "react";
import { fetchCategories } from "../utils/fetch";
import { data } from "react-router";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import CategoryCard from "../components/CategoryCard";

CategoryCard
function Categories() {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetchCategories().then(data => {
            setCategories(data)
            console.table(data);
        });
    }, []);

    return <>
        <h1>Categorie</h1>

        {!categories ? (
            <p>Caricamento in corso...</p>
        ) : (
            <CategoryList categories={categories} />
        )}
    </>
}
export default Categories;