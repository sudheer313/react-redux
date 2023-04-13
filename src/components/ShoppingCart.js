import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateItem,
  updateQuantity,
} from "../features/cartSlice";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editing, setEditing] = useState(null);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && price.trim()) {
      if (editing) {
        dispatch(updateItem({ id: editing, name, price: parseFloat(price) }));
        setEditing(null);
      } else {
        dispatch(addItem({ id: Date.now(), name, price: parseFloat(price) }));
      }
      setPrice("");
      setName("");
    }
  };
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  const handleEdit = (item) => {
    setEditing(item.id);
    setName(item.name);
    setPrice(item.price);
  };
  const handleQuantityChange = (id, e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleSort = (e) => {
    const sortBy = e.target.value;
    if (sortBy === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      items.sort((a, b) => a.price - b.price);
    }
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <form onSubmit={handleSubmit} className="shopping-cart-form">
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
      <div className="shopping-cart-form">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={handleSort}>
          <option value="">Select</option>
          <option value="name">"name"</option>
          <option value="price">"price</option>
        </select>
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index} className="shopping-cart-item">
            {item.name}-${item.price.toFixed(2)}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e)}
              min="1"
              className="Shopping-cart-quatity"
            />
          </div>
        ))}
      </div>
      <h3>Total:${total.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
