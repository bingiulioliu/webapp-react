async function fetchSearchBar(query) {
    // controllino per query vuota (restituisce array vuoto senza fare fetch)
    if (!query || !query.trim()) return [];

    try {
        // messo le variabili d'ambiente nel file .env e .env.example 
        // (cancellare data da .env.example alla fine)
        const port = import.meta.env.VITE_PORT;
        const host = import.meta.env.VITE_HOST;
        const path = import.meta.env.VITE_PATH;
        const queryParam = import.meta.env.VITE_QUERY_PARAM;

        const url = `http://${host}:${port}/${path}?${queryParam}=${query.trim()}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }

        const responseData = await response.json();

        return responseData.data || [];


    } catch (error) {
        console.error('Error while searching in fetchSearchBar:', error);
        return [];
    }
}

export default fetchSearchBar;
