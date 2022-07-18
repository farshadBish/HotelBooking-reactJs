import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import '../styles/oneHotelJambot.css';
import {FaMailBulk,FaPhone} from "react-icons/fa";
const OneHotelJambot = (props) => {
  return (
    <Jumbotron fluid className='navbarWidth jambPic pt-0' style={{borderRadius:'20px'}}>
    <Container className='pl-0 ml-0'>
        <Row className='text-left'>
            <Col md={12} className=''>
                <div className='gradient' style={{borderRadius:'20px'}}>
                <img src="https://media.discordapp.net/attachments/713873647550464000/991280660314591303/victorops-logo-clr.png" alt="" className='logo' />
                <h1 className='ml-3'>Dream Vacation</h1>
                <p className='ml-3'><b>Enjoy the luxury vacation with your loved ones in our special hotels.</b>
                </p>
                <h5 className='ml-3 mt-3 text-white-50 disappearIt'><b>World Wide traveling</b></h5>
                </div>
            </Col>
        </Row>

    </Container>
    <Container>
        <div className='formInput2 shadow-lg'>
            <Row>
                <Col xs={12}>
            <h6 className='border-bottom pb-3 pt-3 text-center smallHeader'>Hotel Contacts</h6>
            </Col>
            <Col sm={9} className='py-lg-4 py-md-4'>
                <div className="border-right ">
            <p className="text-left"><b>E-mail<FaMailBulk className="ml-2"/> : </b>  {props.hotelDetails[0].emails[0].slice(50,100)}</p>
            <p className="text-left"><b>Number <FaPhone className="ml-1"/> : </b>    {props.hotelDetails[0].phoneNumbers[0]}</p>
            </div>
            </Col>
            <Col sm={3} className='py-lg-4 py-sm-4 py-md-4'>
                <div className="">
            <p className="text-left"><b>Check-in : </b>  {props.hotelDetails[0].checkIn.from}</p>
            <p className="text-left"><b>check-out : </b> {props.hotelDetails[0].checkOut.to}</p>
            </div>
            </Col>
            {/* <Col sm={3} className=''>
                <div className="pt-md-3 pt-0 pt-sm-2 ml-auto mr-auto">
                     <button className="mt-md-3 mt-md-2 mt-sm-3 mt-0 BrowseBtn">Browse Hotels</button>
                </div>
            </Col> */}
            </Row>
        </div>
    </Container>
</Jumbotron>
  )
}

export default OneHotelJambot