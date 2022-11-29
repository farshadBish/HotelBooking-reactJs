import {Col, Container, Row } from 'react-bootstrap'
import '../styles/hotelCard.css'
import HotelCardSingle from './HotelCardSingle';


const HotelCard = (props) => {


  return (
    <div className='allCardContain'>
        <Container style={{borderLeft:'purple 7px solid'}}>
          <Row style={{ borderRadius:'20px'}} className=''>
            <Col xs={12}>
        <h1 className='display-3 cardHeader'>Our Hotels</h1>
        </Col>
        {props.hotelName.map((item,i) => (
          <HotelCardSingle item={item} key={i} />
        ))}
</Row>
</Container>
</div>
  )
}
export default HotelCard