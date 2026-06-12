

async function fetchLatestFive() {
    try {
        const response = await fetch('http://localhost:3000/products/latest');

        if (!response.ok) {
            throw new Error('Errore di comunicazione col server');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Errore', error);
        return null
    }
}

export default fetchLatestFive;