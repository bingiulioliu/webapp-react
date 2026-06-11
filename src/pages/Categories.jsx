import { useEffect } from "react";
import { fetchCategories } from "../utils/fetch";
import { data } from "react-router";
import { useState } from "react";
import CategoryList from "../components/CategoryList";

function Categories() {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetchCategories().then(data => {
            setCategories(data)
            console.table(data);
        });
    }, []);

    return <>
        {!categories ? (
            <p>Caricamento in corso...</p>
        ) : (
            <CategoryList categories={categories} />
        )}
    </>
}
export default Categories;