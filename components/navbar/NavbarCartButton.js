import CartIcon from "../ui/CartIcon";
import Link from "next/link";
import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
function NavbarCartButton() {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    if (totalQuantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalQuantity]);
  return (
    <Link href='/checkout'>
      <button className='navbar_cart_button'>
        <span className='navbar_cart_icon'>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className='navbar_cart_badge'>{totalQuantity}</span>
      </button>
    </Link>
  );
}

export default NavbarCartButton;
