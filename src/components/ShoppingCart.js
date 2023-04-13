import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

const ShoppingCart = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && price.trim()) {
      dispatch(addItem({ name, price: parseFloat(price) }));
      setPrice("");
      setName("");
    }
  };

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter item Name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Item Price"
          step="0.01"
          min="0"
        />
        <button type="submit">Add Item</button>
      </form>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            {item.name}-${item.price.toFixed(2)}
          </div>
        ))}
      </div>
      <h3>Total:${total.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
