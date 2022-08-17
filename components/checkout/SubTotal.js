import React from 'react';
import classes from './SubTotal.module.css';
import getStripe from '../../lib/getStripe';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
function SubTotal() {
  const { totalQuantity, subTotalPrice, items } = useSelector(
    (state) => state.cart
  );
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className={classes.subtotal}>
      <p>
        Subtotal ({totalQuantity} items):
        <strong>
          ${subTotalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </strong>
        <small className={classes.subtotal_gift}>
          <input type='checkbox' />
          as a Gift
        </small>
      </p>
      {items.length < 1 ? null : (
        <button type='button' onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default SubTotal;
