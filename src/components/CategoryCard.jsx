import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/categories/${category.id}`}
      className="category-card-link"
    >
      <article className="category-card-cartoon h-100">
        <div className="category-card-icon">
          🥔
        </div>

        <div className="category-card-content">
          <span className="category-card-kicker">
            Dinastia patatosa
          </span>

          <h3>
            {category.name}
          </h3>

          <p>
            {category.description}
          </p>
        </div>

        <span className="btn btn-category-card">
          Esplora
        </span>
      </article>
    </Link>
  );
}

export default CategoryCard;