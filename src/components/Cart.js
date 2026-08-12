import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className=" w-6/12 m-auto">
        {cartItems.length > 0 && (
          <button
            className="w-auto p-2 rounded-2xl bg-red-400 cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length == 0 && (
          <h1 className="italic">Cart is Empty, Add Items to the cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
