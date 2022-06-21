import React from "react";
import CheckoutItem from "./CheckoutItem";
import classes from "./Checkout.module.css";
import SubTotal from "./SubTotal";
import { useSelector } from "react-redux";
import Image from "next/image";
import bannerImage from "../../public/assets/banner.png";

function Checkout() {
  const { totalQuantity, subTotalPrice, items } = useSelector(
    (state) => state.cart
  );

  const cartList = items.map((item) => (
    <CheckoutItem key={item.id} item={item} />
  ));

  return (
    <div className={classes.checkout}>
      <div className={classes.checkout_left}>
        <Image src={bannerImage} alt='' className={classes.checkout_banner} />
        <div>
          <h2 className={classes.checkout_title}>My Shopping Cart</h2>
          {cartList}
        </div>
        <div className={classes.subtotal}>
          {`${totalQuantity} item(s): `}
          <strong>
            <small>$</small>
            {`${subTotalPrice
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
          </strong>
        </div>
      </div>
      <div className={classes.checkout_right}>
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
