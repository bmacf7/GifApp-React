import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [category, setCategory] = useState("");

  const inputChangeHandler = ({ target }) => {
    setCategory(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const input = category.trim();
    if (input.length <= 1) return;
    onNewCategory(input);
    setCategory("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Buscar un gif"
        value={category}
        onChange={inputChangeHandler}
      />
    </form>
  );
};
