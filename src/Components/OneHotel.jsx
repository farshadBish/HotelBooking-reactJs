import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import {  Col, Container, Row } from 'react-bootstrap'
import '../styles/oneHotel.css'
import OneHotelCarousel from "./OneHotelCarousel";
import OneHotelJambot from "./OneHotelJambot";
import { Audio } from  'react-loader-spinner'


const OneHotel = () => {
    const params = useParams();
    const [loading , setLoading] = useState("false")
    const [hotelDetails,setHotelDetails] = useState();
    const fetchHotels = async () => {
      try {
        let response = await fetch(`https://customhotels-494f8951a67d.herokuapp.com/hotels/${params.id}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        })
        let data = await response.json();
        setHotelDetails(data.hotelInfo);
        setLoading("false")
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      fetchHotels();
      setLoading("true")
    },[])
    useEffect(()=>{
    },[hotelDetails])
  return (
    <Container fluid className="mb-5">
      {loading === "true" ?  <Row> 
  <Col xs={12}>
    <div className="d-flex justify-content-center align-items-center">
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
</Row>  : <Row style={{minHeight:"100vh"}}>
        <Col sm={12}>
          { hotelDetails && <OneHotelJambot hotelDetails={hotelDetails}/>}
        </Col>
        <Col sm={12} className='mt-5'>
         { hotelDetails  && <OneHotelCarousel hotelDetails={hotelDetails} />}
        </Col>
      </Row> }

    </Container>
  )
}

export default OneHotel