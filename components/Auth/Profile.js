import { useState, useEffect } from "react";
import Link from "next/link";
import useRouter from "next/router";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Profile.module.css";
import { BsShopWindow } from "react-icons/bs";
import { passwordChange, reset } from "../../store/auth/auth-slice";
import { toast } from "react-hot-toast";
function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        idToken: user,
        password,
        returnSecureToken: false,
      };

      dispatch(passwordChange(userData));
      navigate("/");
    }
  };
  return (
    <div className={classes.main_container}>
      <Link href='/' style={{ textDecoration: "none" }}>
        <div className={classes.login_logo}>
          <BsShopWindow
            className={classes.login_icon}
            fontSize='large'
            size={25}
            style={{
              margin: "5px 8px 0 0",
              color: "#ff9f00",
            }}
          />
          <h2 className={classes.login__logoTitle} style={{ color: "black" }}>
            e-Shop
          </h2>
        </div>
      </Link>
      <div className={classes.container}>
        <form id='form' className='form' onSubmit={formSubmitHandler}>
          <h2>Change Password</h2>

          <div className={classes.form_control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter a password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.form_control}>
            <label htmlFor='password2'>Password</label>
            <input
              type='password'
              id='password2'
              placeholder='Confirm password'
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <button type='submit' className={classes.login_signinbutton}>
            Sign-in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
