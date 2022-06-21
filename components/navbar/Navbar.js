import React from "react";
import Link from "next/link";
import { BsShopWindow, BsSearch } from "react-icons/bs";
import NavbarCartButton from "./NavbarCartButton";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../store/auth/auth-slice";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className='navbar_container'>
      <Link href='/'>
        <div className='navbar_logo'>
          <BsShopWindow fontSize={"2rem"} style={{ cursor: "pointer" }} />

          <h2>Semih's Store</h2>
        </div>
      </Link>

      <div className='navbar_cart'>
        <Link href='/profile'>
          <span>Hello Guest</span>
        </Link>

        <Link href='/login'>
          <button>Login</button>
        </Link>
        <Link href='/logout'>
          <button>Logout</button>
        </Link>

        <NavbarCartButton />
      </div>
    </div>
  );
}

export default Navbar;
