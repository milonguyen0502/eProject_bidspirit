import React from 'react';
import '../css/cart.css';

function Cart({ cart, handleDelete }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.img} alt="Product" />
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p className="sku">SKU: {product.sku}</p>
                  <p className="final-sale">Final Sale</p>
                  <div className="shipping-info">
                    <i className="fa fa-truck" aria-hidden="true"></i>
                    <p>This item is eligible for international shipping.</p>
                  </div>
                  <p>Qty: 1</p>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <p className="price">{product.price} USD</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal ({cart.length} item{cart.length > 1 ? 's' : ''})</span>
              <span>{totalPrice} USD</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>-</span>
            </div>
            <div className="summary-item">
              <span>Taxes</span>
              <span>-</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>{totalPrice} USD</span>
            </div>
            <button className="btn-order">Log in to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
