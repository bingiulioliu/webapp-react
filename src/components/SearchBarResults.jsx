import ProductCard from './ProductCard.jsx';

function SearchBarResults({ results, loading }) {
    if (loading) return <p className='text-center'>Stiamo sfornando i risultati...</p>;
    // se non si preme il bottone, non mostra nulla
    if (results === null) return null;
    // la ricerca non fornisce risultati
    if (results.length === 0) {
        return (
            <p className='text-center mt-3'>
                Non abbiamo trovato prodotti che corrispondono alla tua ricerca...
            </p>
        );
    }
    
    return (
        <div>
            <h3 className='text-center mb-4'>Risultato della tua ricerca:</h3>
            <div className='row gap-4'>
                {results.map((product) => (
                    <div className='col-12 col-md-6 col-lg-3' key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <hr className='my-5'/>
        </div>
    );
}

export default SearchBarResults;