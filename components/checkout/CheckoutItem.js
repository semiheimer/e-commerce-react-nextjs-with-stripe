import React from "react";
import classes from "./CheckoutItem.module.css";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slice";

function CheckoutItem({ item }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const selectedValue = +e.target.value;
    if (selectedValue > 0)
      dispatch(
        cartActions.addItemToCartWithQuantity({
          ...item,
          quantity: +e.target.value,
        })
      );
    else {
      dispatch(cartActions.removeItemToCart(item.id));
    }
  };
  return (
    <div className={classes.checkout_item}>
      <img src={item.image} alt='' className={classes.checkout_item_image} />
      <div className={classes.checkout_item_desription}>
        <p className={classes.checkout_item_title}>{item.title}</p>
        <p className={classes.checkout_item_price}>
          <small>
            <strong>$</strong>
          </small>
          <strong>{item.price}</strong>
        </p>
        <Rating
          className={classes.rating}
          name='half-rating-read'
          defaultValue={item.rating}
          precision={0.5}
          readOnly
          size='large'
        />
        <div className='custom-select'>
          <select defaultValue='1' onChange={handleChange}>
            <option value='0'>0 (delete)</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
      </div>
      <div className={classes.itempriceSum}>
        <p>
          {`${item.quantity} item(s): `}
          <strong>
            <small>$</small>
            {`${item.totalPrice
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutItem;
