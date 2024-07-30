import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import {Row,Col,Image,ListGroup,Card,Button} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from 'axios'

const ProductScreen = () => {

  const [product, setProduct] = useState({})
  const { id: productId } = useParams();
  console.log(product);
  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${productId}`)
      setProduct(data);
     };
     fetchProduct();
  }, [productId]);
  

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>

            {/* <ListGroup.Item>Price: ${product.price}</ListGroup.Item> */}
          </ListGroup>
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name}></Image>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
