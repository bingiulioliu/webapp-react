// Fetch per i prodotti
export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');

        if (!response.ok){
            throw new Error ('Errore di comunicazione col server');
        }

        const data = await response.json();
        console.log('Prodotti:', data);
        return data.data;

    } catch(error) {
        console.error('Errore', error);
        return null
        
    }
}