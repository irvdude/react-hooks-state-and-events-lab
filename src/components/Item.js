import React, { useState } from "react";

function Item({ name, category }) {

  const [itemAddState, setItemAddState] = useState(false)

  function addItem() {
    setItemAddState(itemAddState === true ? false : true)
  }

  const itemClass = itemAddState ? "in-cart" : ""
  const addItemText = itemAddState ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{addItemText}</button>
    </li>
  );
}

export default Item;
