import { Card } from 'react-bootstrap';

//taking product as a prop as beeing mapped from HomeScreen
const Product = ({ product }) => {
  return (
    //try to play with classes
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

//Notes
//1.Card.X - X are different properties of Card see more in bootstrap.Card