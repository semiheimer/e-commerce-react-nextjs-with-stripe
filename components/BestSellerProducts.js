import React from "react";
import ProductItem from "./ProductItem";

function BestSellerProducts({ bestSellerProducts }) {
  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>"Loading...!"</p>
  //     </section>
  //   );
  // }

  const productsList = bestSellerProducts?.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      image={product.images[0]}
      rating={product.rating}
    />
  ));
  return <div className='products-container'>{productsList}</div>;
}

export default BestSellerProducts;
