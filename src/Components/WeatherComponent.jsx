
import {Card, Col, Container, Row } from 'react-bootstrap';
import '../styles/weatherComponent.css'


const WeatherComponent = () => {
  return (
    <Container className=''>
    <h3 className="display-3 weatherHeader pb-2">Current Weather</h3>
    <Row className='weathercontain mr-0 ml-0'>
        <Col>
        <Card className=' shadow-lg weatherCard ml-auto mr-auto mb-3 mb-xl-0' style={{borderRadius:'20px'}}>
  <Card.Img variant="top" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg"/>
  <Card.Body>
    <Card.Title>London</Card.Title>
    <Card.Text>
        32*
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card className=' shadow-lg weatherCard ml-auto mr-auto mb-3 mb-xl-0' style={{borderRadius:'20px'}}>
  <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg" />
  <Card.Body>
    <Card.Title>NewYork</Card.Title>
    <Card.Text>
    32*
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card className='shadow-lg weatherCard ml-auto mr-auto mb-0' style={{borderRadius:'20px'}}>
  <Card.Img variant="top" src="https://www.planete-energies.com/sites/default/files/thumbnails/image/moscou.jpg"/>
  <Card.Body>
    <Card.Title>Moscow</Card.Title>
    <Card.Text>
    32*
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    </Row>
    <button className="button-57 ml-auto mr-auto"><span className="text">Locations</span><span>Browse more!</span></button>
    </Container>
  )
}

export default WeatherComponent;
