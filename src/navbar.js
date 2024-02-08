import React, { useState } from "react";
import "./navbar.css";

const NavBar = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category, null); // Pass null as subcategory
  };

  const handleSubcategoryClick = (subcategory) => {
    onSelectCategory(selectedCategory, subcategory); // Pass selected category and subcategory
  };

  return (
    <nav className="nav-container">
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <button
            className="category-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
          {selectedCategory === category && (
            <div className="subcategories">
              {Object.keys(categories[category]).map((subcategory) => (
                <button
                  className="subcategory-button"
                  key={subcategory}
                  onClick={() => handleSubcategoryClick(subcategory)}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
