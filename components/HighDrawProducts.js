import Slider from "react-slick";
import NextArrow from "./ui/slider-arrows/NextArrow";
import PrevArrow from "./ui/slider-arrows/PrevArrow";
import ProductItem from "./ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HighDrawProducts({ highDrawProducts }) {
  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>"Loading...!"</p>
  //     </section>
  //   );
  // }

  const productsList = highDrawProducts?.map((product) => (
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

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='highdraw-products'>
      <Slider {...settings}>{productsList}</Slider>
    </div>
  );
}

export default HighDrawProducts;
