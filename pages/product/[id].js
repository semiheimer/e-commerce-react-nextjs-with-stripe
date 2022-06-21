import ProductDetails from "../../components/productdetails/ProductDetails";
function ProductDetailsPage({ loadedProduct, products }) {
  return (
    <ProductDetails
      loadedProduct={loadedProduct}
      products={products}
    ></ProductDetails>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=30");
  const loadedProducts = await response.json();
  const paths = loadedProducts.products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { id } }) => {
  const responseProduct = await fetch(`https://dummyjson.com/products/${id}`);
  const responseProducts = await fetch(
    "https://dummyjson.com/products?limit=25"
  );
  const loadedProduct = await responseProduct.json();
  const loadedProducts = await responseProducts.json();
  const products = [];
  await loadedProducts.products.map((item) => {
    products.push({
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
    props: { loadedProduct, products },
  };
};
export default ProductDetails;
