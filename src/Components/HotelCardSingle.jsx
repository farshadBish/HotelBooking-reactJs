import { useState } from 'react';
import {Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { FaBookmark,FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HotelCardSingle = ({item}) => {

    const [bookmark,setBookmark] = useState(false);
    const handleBookMarking = () =>{
      setBookmark(bookmark => !bookmark)
    }
    
    let toggleClass = bookmark ? ' bookmarkActive' : ' bookmarkDisactive';
    
    const navigate = useNavigate()


    const goToOneHotel = () => {
      navigate(`/hotel/${item._id}`)
    }

    return (
        <Col lg={4} md={6} xs={12} className='mb-5'>
        <Card style={{borderRadius:'20px',height:'100%'}} className='shadow-lg hotelCards px-4 pt-4'>
         <div>
         <FaBookmark className={`bookmarkContain${toggleClass}`} onClick={handleBookMarking}/>
        <FaBookmark className={`bookmarkIcon`}/>
        </div>
  <Card.Img variant="top" src={item.images[0]} style={{height:'270px',objectFit:'cover',borderRadius:'20px'}} className="ml-auto mr-auto " />
  <Card.Body>
    <Card.Title style={{fontSize:'25px',lineHeight:'2.3rem'}}>{item.name}<br/><span className='px-2 py-1' style={{backgroundColor:'#003580',color:'white',borderRadius:'4px',fontSize:'14px'}}><b>{item.starRating}<FaStar className='mb-1 ml-1'/></b></span></Card.Title>
    <Card.Text>
     {item.description.slice(0,50)}...
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><b>{item.city}, {item.country}</b></ListGroupItem>
    <ListGroupItem className='cardList'><b>{item.roomCount}</b> available rooms</ListGroupItem>
  </ListGroup>
  <Card.Body>
   <div className='d-flex justify-content-center align-items-center'>
   <button onClick={goToOneHotel} className="mt-md-3 mt-md-2 mt-sm-3 mt-0 BrowseBtn">See Availability</button>
    </div>
  </Card.Body>
</Card>
</Col>
    )
}

export default HotelCardSingle