 import { Container, Row, Col } from "react-bootstrap"

//  this is my foote 
const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                    <p> Eshop &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer