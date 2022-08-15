import { useEffect, useState } from 'react';
import classes from './Login.module.css';
import { BsLock, BsShopWindow } from 'react-icons/bs';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../store/auth/auth-slice';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Login() {
  // const localStToken =
  //   typeof window === 'object' ? localStorage.getItem('user') : null;
  // const [token, setToken] = useState(localStToken);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    if (isError) toast.error(message);
    if (user) router.push('/');
    else dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    dispatch(login({ email: enteredEmail, password: enteredPassword }));
  };

  return (
    <div className={classes.main_container}>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <div className={classes.login_logo}>
          <BsShopWindow
            className={classes.login_icon}
            size={24}
            style={{
              color: '#ff9f00',
              margin: '-20px 5px 0 0',
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
              ref={emailInputRef}
            />
          </div>
          <div className={classes.form_control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter a password'
              ref={passwordInputRef}
            />
          </div>
          <button type='submit' className={classes.login_signinbutton}>
            Sign-in
          </button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <p>Don&apos;t have an account?</p>
        <button
          className={classes.login_registerbutton}
          onClick={() => router.replace('/register')}
        >
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
