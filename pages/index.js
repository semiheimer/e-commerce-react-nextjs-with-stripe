import HeroBanner from "../components/HeroBanner";
import React from "react";
import BestSellerProducts from "../components/BestSellerProducts";
import HighDrawProducts from "../components/HighDrawProducts";

function Home({ loadedProducts }) {
  return (
    <div>
      <div>
        <HeroBanner
          heroProduct={loadedProducts?.find((item) => item.id === 13)}
        ></HeroBanner>
      </div>
      <div className='products-heading'>
        <h2>Best Seller Products</h2>
      </div>

      <BestSellerProducts
        bestSellerProducts={loadedProducts?.filter((item) => item.id < 9)}
      />

      <div className='products-heading'>
        <h2>High-Draw Products</h2>
      </div>
      <div className='highdrawproducts-container'>
        <HighDrawProducts
          highDrawProducts={loadedProducts?.filter((item) => item.id < 15)}
        />
      </div>
    </div>
  );
}

export default Home;
export const getServerSideProps = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=25");

  const productsData = await response.json();
  const loadedProducts = [];
  await productsData.products.map((item) => {
    loadedProducts.push({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      images: item.images,
      brand: item.brand,
      category: item.category,
      rating: item.rating,
    });
    return item;
  });

  return {
    props: { loadedProducts },
  };
};
