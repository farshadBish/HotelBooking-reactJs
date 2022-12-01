import { Badge, Button, Carousel, Col,Container, Row, Table } from "react-bootstrap";
import "../styles/oneHotelCarousel.css";
import { FaStar, FaMapMarkerAlt,FaLevelDownAlt ,FaFirstOrder,FaCheck,FaTimes,FaBed,FaArrowAltCircleDown} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
const OneHotelCarousel = (props) => {
  const params = useParams()
  const navigate = useNavigate()

  const goToBooking = () =>{
    navigate(`/hotel/${params.id}/booking`)
  }
  return (
    <>
      <Container style={{borderRadius:'20px'}} className='pb-1 firstContain'>
        <div className="contaiOneHotel">
          <Row>
            <Col lg={6}>
              <Carousel fade className="shadow-lg" style={{ width: "100%", marginTop: '-40px',borderRadius:'20px'}}>
                {props.hotelImages.slice(0,4).map((item, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      style={{
                        borderRadius: "20px",
                        minHeight: "400px",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                      src={item.url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col lg={6}>
              <div className="  justify-content-center mt-4">
                <h4 className="d-inline">
                  <span
                    className="px-2 py-1 smallHotel"
                    style={{
                      backgroundColor: "#003580",
                      color: "white",
                      borderRadius: "4px",
                    }}
                  >
                    <b>
                      {props.hotelDetails.length > 0 && props.hotelDetails[0].starRating}
                      <FaStar className="mb-1 ml-1" />
                    </b>
                  </span>
                  <b> {props.hotelDetails[0].name}</b>
                </h4>
                <br />
                <p className="text-mute">
                    <b>
                  <FaMapMarkerAlt /> {props.hotelDetails[0].address.line1} ,{" "}
                  {props.hotelDetails[0].address.postalCode}{" "}
                  {props.hotelDetails[0].address.city} ,{" "}
                  {props.hotelDetails[0].address.countryName}
                  </b>
                </p>
                <p className='text-left'>
                    {props.hotelDetails[0].description.short}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{borderRadius:'20px'}} className='pb-1 secondContain'>
        <div className="contaiOneHotel2">
          <Row>
            <Col lg={6}>
              <div className="  justify-content-center mt-4">
                <h4 className="d-inline">
                  <b>What this hotel offers </b>
                </h4>
                <br />
                <p className="text-mute">
                    <b>
                   Features <FaLevelDownAlt />
                  </b>
                </p>
                <Table striped bordered hover size="sm" className=" mb-5 mb-lg-0">
  <thead>
    <tr>
      <th>#</th>
      <th className="">Amenities</th>
      <th><FaCheck/>/<FaTimes/></th>
    </tr>
  </thead>
  <tbody>
    {props.hotelAminities.slice(0,6).map((item,i)=>(
            <tr style={{backgroundColor:'#5D5E60'}} className='text-white text-center' key={i}>
            <td>{i+1}</td>
            <td className="text-left"><div className=""><FaFirstOrder/> {item.formatted}</div></td>
            <td><FaCheck/></td>
          </tr>
    ))}

  </tbody>
</Table>
              </div>
            </Col>
            <Col lg={6}>
              <Carousel fade className="shadow-lg" style={{ width: "100%", marginTop: '-40px',borderRadius:'20px'}}>
                {props.hotelImages.slice(4,9).map((item, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      style={{
                        borderRadius: "20px",
                        minHeight: "400px",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                      src={item.url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{borderRadius:'20px'}} className='pb-1 thirdContain '>
        <div className="contaiOneHotel2">
          <Row>
            <Col lg={6}>
              <Carousel fade className="shadow-lg" style={{ width: "100%", marginTop: '-40px',borderRadius:'20px'}}>
                {props.hotelImages.slice(2,6).map((item, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      style={{
                        borderRadius: "20px",
                        minHeight: "400px",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                      src={item.url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col lg={6}>
              <div className="justify-content-center mt-4">
                <h4 className="d-inline">
                    Choices Between <b>{props.hotelDetails[0].roomTypes.length} Different</b> Room Types!
                </h4>
                <br />
                <p className="text-muted">
                    <b>
                    {props.hotelDetails[0].roomCount} Free rooms right now! <FaBed/>
                  </b>
                </p>
                <p className='text-left'>
                    Room types means these are different kind of rooms in hotel in the ways of for example the <b>occupancy</b> they have and the different <b>amenities</b> with different views and all these, for book a room in this hotel and see all room types these hotel provides click on the button below <FaArrowAltCircleDown/>.
                </p>
                {/* {window.localStorage.getItem("SetToken") ? <button onClick={goToBooking} className="mt-md-3 mt-md-2 mt-sm-3 mt-0 BrowseBtn">Book now!</button> :
                <><Button onClick={goToBooking} style={{backgroundColor:"gray",border:"none"}} disabled className="mt-md-3 mt-md-2 mt-sm-3 mt-0">Book now!</Button><br/>
                <Badge onClick={()=>navigate("/login-register")} style={{cursor:"pointer"}} className="p-2 mt-2" variant="warning">To continue to booking please <b>Login</b> first</Badge></>} */}
                <Button onClick={goToBooking} style={{backgroundColor:"gray",border:"none"}} className="mt-md-3 mt-md-2 mt-sm-3 mt-0">Book now!</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default OneHotelCarousel;
