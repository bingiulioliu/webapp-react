async function fetchProducts() {
    
    try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Si è verificato un problema con la fetch:", error);
    }
}

export default fetchProducts;