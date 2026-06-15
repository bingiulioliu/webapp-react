async function fetchProducts(page = 1, limit = 10, search = "") {
    let url = `http://localhost:3000/products?page=${page}&limit=${limit}`;

    if (search) {
        url += `&search=${search}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Errore nel recupero dei prodotti");
    }

    const data = await response.json();

    return data;
}

export default fetchProducts;