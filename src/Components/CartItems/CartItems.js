import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt='remove'
                  className='cartitems-remove-icon'
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total' >
            <h1>Carts Total</h1>
            <div>
                <div className='cartitems-total-item'>
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Shipping Fees</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <buttton>
                PROCEED
            </buttton>
        </div>
        <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here </p>
            <div className='cartitems-promobox'>
                <input type='text' placeholder='promo code' />
                <button>Submit</button>
            </div>


        </div>

      </div>

    
    </div>
  );
};

export default CartItems;





