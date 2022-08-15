import ProductDetails from '../../components/productdetails/ProductDetails';
function ProductDetailsPage({ product, products }) {
  return (
    <ProductDetails
      loadedProduct={product}
      products={products}
    ></ProductDetails>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=30');
  const loadedProducts = await response.json();
  const paths = loadedProducts.products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps = async ({ params: { id } }) => {
  const responseProduct = await fetch(`https://dummyjson.com/products/${id}`);
  const responseProducts = await fetch(
    'https://dummyjson.com/products?limit=25'
  );
  const loadedProduct = await responseProduct.json();
  const loadedProducts = await responseProducts.json();
  const products = [];
  const product = {
    id: loadedProduct.id,
    title: loadedProduct.title,
    description: loadedProduct.description,
    price: loadedProduct.price,
    images: loadedProduct.images,
    brand: loadedProduct.brand,
    category: loadedProduct.category,
    rating: loadedProduct.rating,
  };

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
    props: { product, products },
  };
};
export default ProductDetails;
