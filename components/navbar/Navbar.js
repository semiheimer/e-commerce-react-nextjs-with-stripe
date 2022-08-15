import React from 'react';
import Link from 'next/link';
import { BsShopWindow } from 'react-icons/bs';
import NavbarCartButton from './NavbarCartButton';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logout, reset } from '../../store/auth/auth-slice';
// import dynamic from 'next/dynamic';

// const Dynamic = dynamic(() => import('./Dynamic'), {
//   ssr: false,
// });
function Navbar() {
  // const [isSSR, setIsSSR] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);
  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    router.push('/');
  };
  return (
    <div className='navbar_container'>
      <Link href='/'>
        <div className='navbar_logo'>
          <BsShopWindow fontSize={'2rem'} style={{ cursor: 'pointer' }} />

          <h2>Semih&apos;s Store</h2>
        </div>
      </Link>

      <div className='navbar_cart'>
        {!user && (
          <Link href='/login'>
            <button type='button'>Login</button>
          </Link>
        )}
        {user && (
          <>
            <Link href='/profile'>
              <span>Hello Guest</span>
            </Link>
            <button onClick={logoutHandler}>Logout</button>
          </>
        )}
        <NavbarCartButton />
      </div>
    </div>
  );
}

export default Navbar;
