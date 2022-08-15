import classes from './ProductItem.module.css';
import { Rating } from '@mui/material';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart/cart-slice';
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        rating: props.rating,
      })
    );
  };

  return (
    <div className={classes.product}>
      <Link href={`/product/${props.id}`}>
        <img className={classes.image} src={`${props.image}`} alt='desc' />
      </Link>
      <p>{props.title}</p>
      <Rating
        className={classes.rating}
        name='half-rating-read'
        defaultValue={props.rating}
        precision={0.5}
        readOnly
        size='small'
      />
      <button onClick={addToCartHandler}>
        <span>
          <small>$</small>
          <strong>{price}</strong>
        </span>
      </button>
    </div>
  );
};
export default ProductItem;
