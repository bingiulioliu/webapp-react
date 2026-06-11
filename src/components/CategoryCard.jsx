import { Link } from "react-router-dom";

function CategoryCard({ category }) {
    return (
        <Link to={`/category/${category.id}`}>
            <div>
                {/* Container per img o icona non presente nel DB (aggiungere o creare dal front-end?) */}
                <div>
                    <img src={/*URL icona front-end*/} alt={category.name}/>
                </div>
                <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;






