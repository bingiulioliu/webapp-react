// Fetch per tutti i prodotti
export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');

        if (!response.ok) {
            throw new Error('Errore di comunicazione col server');
        }

        const data = await response.json();
        console.log('Prodotti:', data);
        return data.data;

    } catch (error) {
        console.error('Errore', error);
        return null

    }
};

// Fetch per il singolo prodotto
export async function fetchProductById(id) {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`);

        if (!response.ok) {
            throw new Error("Errore nel recupero del prodotto");
        }

        const data = await response.json();
        console.log("Prodotto:", data);

        return data.data;
    } catch (error) {
        console.error("Errore:", error);
        return null;
    }
}

// Fetch per le categorie
export async function fetchCategories() {
    try {
        const response = await fetch('http://localhost:3000/categories');

        if (!response.ok) {
            throw new Error('Errore di comunicazione col server');
        }

        const data = await response.json();
        console.log('Categorie:', data);
        return data.results;

    } catch (error) {
        console.error('Errore', error);
        return null

    }
};