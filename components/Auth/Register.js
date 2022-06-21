import { useState, useEffect } from "react";
import classes from "./Login.module.css";
import Link from "next/link";
import { BsShopWindow } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../store/auth/auth-slice";

function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const { email, password, password2 } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      Router.replace("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div className={classes.main_container}>
      <Link href='/' style={{ textDecoration: "none" }}>
        <div className={classes.login_logo}>
          <BsShopWindow
            className={classes.login_icon}
            size={24}
            style={{
              color: "#ff9f00",
              margin: "-20px 5px 0 0",
            }}
          />
          <h2 className={classes.login_logoTitle}>e-Shop</h2>
        </div>
      </Link>
      <div className={classes.container}>
        <form id='form' className='form' onSubmit={formSubmitHandler}>
          <h2>Sign-in</h2>
          <div className={classes.form_control}>
            <label htmlFor='email'>E-mail</label>
            <input
              type='text'
              id='email'
              placeholder='Enter email'
              onChange={changeHandler}
              name='email'
              value={email}
            />
          </div>
          <div className={classes.form_control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              name='password'
              value={password}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.form_control}>
            <label htmlFor='password2'>Password</label>
            <input
              type='password'
              id='password2'
              placeholder='Confirm password'
              name='password2'
              value={password2}
              onChange={changeHandler}
            />
          </div>
          <button type='submit' className={classes.login_signinbutton}>
            Create your eShop Account
          </button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <p>Have an account?</p>
        <button
          className={classes.login_registerbutton}
          onClick={() => router.replace("/login")}
        >
          Sign-in
        </button>
      </div>
    </div>
  );
}

export default Register;
