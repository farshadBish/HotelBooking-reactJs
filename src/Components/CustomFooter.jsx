import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"

export const CustomFooter = () => {
    return (
        <Container fluid className='px-md-5 px-1'>
            <Navbar bg="light" variant="light" scroll="bottom">
                <Nav className="mr-auto ml-auto">
                    <Row>
                        <Col>
                            <Nav.Link href="#">Customer Service Help</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#">Terms & conditions</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#">Privacy & cookie statement</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#">Reviews</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#">Manage cookie settings</Nav.Link>
                        </Col>
                    </Row>
                </Nav>
            </Navbar>
        </Container>
    )
}
