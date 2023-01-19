import { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import '../styles/hotelCarousel.css'
import { useNavigate} from 'react-router-dom';
import { Audio } from  'react-loader-spinner'



 const HotelCarousel = () => {
  const [hotelName,setHotelName] = useState([]);
  const [loading , setLoading] = useState("false")

  const navigate = useNavigate()

  

      useEffect(()=>{
        setLoading("true")
        fetchHotels();
        console.log(hotelName , 'this is ur array');
      },[])
      
      const fetchHotels = async () =>{
        try {
          let response = await fetch(`https://makingcorsanywhere.herokuapp.com/https://sandbox.impala.travel/v1/hotels?country[eq]=ITA`,{
            method : 'GET',
            headers : {
              "Accept-Encoding" : "gzip",
              "Content-Type" : "application/json",
              "x-api-key": "sandb_H4mKDfmhFDRvZ3zTotHWI9ZjcL4C67hlEMLJagEn",
            }
          })
          let data = await response.json();
          setHotelName(data.data)
          console.log(data);
          setLoading("false")
        } catch (error) {
          console.log(error);
        }
      }

      const goToHotelsPage = () =>{
        navigate("/hotels")
      }
   return (
    <>
    <Container>
      <div style={{marginTop:'15rem'}} className='contain'>
          {loading === "false" ?         
          <Row>
        <Col className="mb-4 mb-md-4">
<h3 className="display-3 cardHeader mr-auto ml-auto mt-5 pb-2" style={{borderLeft:'7px purple solid',borderBottom:'7px lightgray solid', width:'100%'}}><b>More than 400+ hotels</b></h3>

 <button className="button-85" onClick={goToHotelsPage}>Browse all hotels</button>

</Col>
          <Col lg ={7}>
<Carousel fade className="" style={{width:'100%'}}>
  {hotelName.slice(0,7).map((item,i)=>(
      <Carousel.Item key={i}>
      <img
      style={{borderRadius:'20px',minHeight:'400px',maxHeight:'400px',objectFit:'cover'}}
        className="d-block w-100"
        src={item.images[0].url}
        // {item.images.slice(0,1).map((image,i)=> image )}
        alt="First slide"
      />
      <Carousel.Caption className="carouselDescription">
        <h3>{item.name}</h3>
        <p className=""><b>{item.address.city}</b></p>
      </Carousel.Caption>
    </Carousel.Item>
))}
</Carousel>
</Col>
</Row> :
 <Row> 
  <Col xs={12}>
    <div className="d-flex justify-content-center">
<Audio
    height = "100"
    width = "100"
    radius = "9"
    color = 'purple'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
  />
  </div>
  </Col>
</Row> }
</div>
</Container>
</>
   )
 }

 export default HotelCarousel;
 