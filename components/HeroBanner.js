import React from 'react';
import Link from 'next/link';

function HeroBanner({ heroProduct }) {
  return (
    <div className='hero-banner-container'>
      <div className='hero_column1'>
        <p className='beats-solo'>{heroProduct.title}</p>
        <h3>Summer Sale</h3>
        <h1>FINE</h1>
        <Link href={`/product/${13}`}>
          <button id='hero_button' type='button'>
            Shop Now
          </button>
        </Link>
      </div>
      <div className='hero_column2'>
        <img
          src='https://dummyjson.com/image/i/products/13/thumbnail.webp'
          alt='headphones'
          className='hero-banner-image'
        />
        <div className='desc1'>
          <h5>{heroProduct.description}</h5>
          <p>{heroProduct.brand}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
