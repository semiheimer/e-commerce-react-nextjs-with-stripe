import { Rating } from "@mui/material";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slice";
function ProductDetails({ loadedProduct, products }) {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const dispatch = useDispatch();
  const { title, price, description, rating, images, brand, id } =
    loadedProduct;

  const addToCartHandler = () => {
    if (inputValue > 0)
      dispatch(
        cartActions.addItemToCartWithQuantity({
          title,
          id,
          price,
          rating,
          image: images[0],
          quantity: +inputValue,
        })
      );
  };
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={images[index]} className='product-detail-image' />
          </div>
          <div className='small-images-container'>
            {images?.map((item, i) => (
              <img
                key={i}
                src={item}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className='product-detail-desc'>
          <h1>{title}</h1>
          <div className='reviews'>
            <Rating
              className=''
              name='half-rating-read'
              defaultValue={rating}
              precision={0.5}
              readOnly
              size='large'
            />
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{description}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              <span
                className='minus'
                onClick={() =>
                  setInputValue(inputValue === 1 ? inputValue : inputValue - 1)
                }
              >
                <AiOutlineMinus />
              </span>
              <span
                className='num'
                value={inputValue}
                onChange={(e) => setInputValue(+e.target.value)}
              >
                {inputValue}
              </span>
              <span
                className='plus'
                onClick={() =>
                  setInputValue(inputValue === 5 ? inputValue : inputValue + 1)
                }
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='buttons'>
            <button
              type='button'
              className='add-to-cart'
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
            <button type='button' className='buy-now'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
