import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'

const Footer = () => {
const currentYear = new Date().getFullYear();


  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                <p>ProShop &copy; {currentYear} | Visit my <a href="https://github.com/benhazoom" target="_blank" rel="noopener noreferrer">Github</a> or this shop <a href="https://github.com/benhazoom/Binyamin-Mern-Web-Shop" target="_blank" rel="noopener noreferrer">Repo</a></p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer