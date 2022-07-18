import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import '../styles/hotelCard.css'
import { FaBookmark,FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HotelCard = (props) => {
  const [bookmark,setBookmark] = useState(false);
  const handleBookMarking = () =>{
    setBookmark(bookmark => !bookmark)
  }
  let toggleClass = bookmark ? ' bookmarkActive' : ' bookmarkDisactive';
  return (
    <div className='allCardContain'>
        <Container style={{borderLeft:'purple 7px solid'}}>
          <Row style={{ borderRadius:'20px'}} className='ml-1 mr-1'>
            <Col xs={12}>
        <h1 className='display-3 cardHeader'>Our Hotels</h1>
        </Col>
        {props.hotelName.map((item,i) => (
           <Col lg={4} md={6} xs={12} key={i} className='mb-5'>
           <Card style={{borderRadius:'20px',height:'100%'}} className='shadow-lg hotelCards px-4 pt-4'>
            <div>
            <FaBookmark className={`bookmarkContain${toggleClass}`} onClick={handleBookMarking}/>
           <FaBookmark className={`bookmarkIcon`}/>
           </div>
     <Card.Img variant="top" src={item.images[0].url} style={{height:'270px',objectFit:'cover',borderRadius:'20px'}} className="ml-auto mr-auto " />
     <Card.Body>
       <Card.Title style={{fontSize:'25px',lineHeight:'2.3rem'}}>{item.name}<br/><span className='px-2 py-1' style={{backgroundColor:'#003580',color:'white',borderRadius:'4px',fontSize:'14px'}}><b>{item.starRating}<FaStar className='mb-1 ml-1'/></b></span></Card.Title>
       <Card.Text>
        {item.description.short.slice(0,110)}...
       </Card.Text>
     </Card.Body>
     <ListGroup className="list-group-flush">
       <ListGroupItem><b>{item.address.city}, {item.address.countryName}</b></ListGroupItem>
       <ListGroupItem className='cardList'><b>{item.roomCount}</b> available rooms</ListGroupItem>
     </ListGroup>
     <Card.Body>
      <div className='d-flex justify-content-center align-items-center'>
      <Link to={`/hotel/${item.hotelId}`}> <button className="mt-md-3 mt-md-2 mt-sm-3 mt-0 BrowseBtn">See Availability</button></Link>
       </div>
     </Card.Body>
   </Card>
   </Col>
        ))}
</Row>
</Container>
</div>
  )
}
export default HotelCard