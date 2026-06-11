import { Link } from "react-router-dom";
import style from './CategoryCard.module.css';

function CategoryCard({ category }) {
    return (
        <Link to={`/category/${category.id}`} className='text-decoration-none'>
            <div className={`h-100 p-4 shadow border border-2 border-black rounded-4 ${style.card}`}>
                {/* 
                <div>
                    <img src={URL icona front-end} alt={category.name}/>
                </div> 
                */}
                <div className='mt-4'>
                    <h3 className='fw-bold mb-2 text-black'>{category.name}</h3>
                    <p className=' text-secondary'>{category.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;