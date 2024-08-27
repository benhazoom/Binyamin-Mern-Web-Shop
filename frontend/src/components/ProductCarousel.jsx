import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
// import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    // <Loader /> commented out because there are two loaders in the home screen
    <></>
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="mb-4" data-bs-theme="dark">
      {products.map((product) => (
        <Carousel.Item key={product._id} className="w-100">
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2 className="text-white text-right">
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
