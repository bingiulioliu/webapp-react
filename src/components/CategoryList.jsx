import CategoryCard from './CategoryCard.jsx';

function CategoryList({ categories }) {
    return (
        <>
            <h1 className='fw-bold'>Le Nostre Dinastie</h1>
            <p className=' text-body-secondary'>Ogni dinastia ha il suo sacro carattere!!</p>
            <div className='container py-5'>
                <div className='row g-4'>
                    {categories.map((category) => (
                        <div key={category.id} className='col-12 col-md-6 col-lg-4'>
                            <CategoryCard category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CategoryList;