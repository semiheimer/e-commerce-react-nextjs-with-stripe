import React from 'react';
import Link from 'next/link';

function Product({ product }) {
  const { images, title, id, price } = product;
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className='product-card'>
          <img
            src={images[0]}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{title}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
