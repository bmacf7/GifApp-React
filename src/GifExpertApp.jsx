import { useState } from "react";
import AddCategory from "./components/AddCategory.jsx";
import GifGrid from "./components/GifGrid.jsx";

function GifExpertApp() {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
}

export default GifExpertApp;
