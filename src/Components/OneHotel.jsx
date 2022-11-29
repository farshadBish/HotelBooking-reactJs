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
    const [hotelDetails,setHotelDetails] = useState([]);
    const [hotelImages,setHotelImages] = useState([]);
    const [hotelAminities,setHotelAminities] = useState([]);
    const [roomTypes,setRoomTypes] = useState([])
    const fetchHotels = async () => {
      try {
        let response = await fetch(`https://corsanywhere.herokuapp.com/https://sandbox.impala.travel/v1/hotels?hotelIds={${params.id}}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "sandb_H4mKDfmhFDRvZ3zTotHWI9ZjcL4C67hlEMLJagEn",
          }
        })
        let data = await response.json();
        setHotelImages(data.data[0].images);
        setRoomTypes(data.data[0].roomTypes)
        console.log(data.data , "thats the data");
        setHotelDetails(data.data);
        setHotelAminities(data.data[0].amenities)
        setLoading("false")
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      setLoading("true")
      console.log(params.id , "thats the id");
      fetchHotels();
      console.log(hotelDetails , "thats the hotel details");
      console.log(hotelImages , "tahts hotel images");
      console.log(hotelAminities , "tahts hotel aminities");
    },[])
  return (
    <Container fluid className="mb-5">
      {loading === "true" ?  <Row> 
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
</Row>  : <Row style={{minHeight:"100vh"}}>
        <Col sm={12}>
          { hotelDetails.length > 0 && <OneHotelJambot hotelDetails={hotelDetails}/>}
        </Col>
        <Col sm={12} className='mt-5'>
         { hotelAminities && hotelImages.length > 0 && roomTypes && hotelDetails.length > 0 && <OneHotelCarousel hotelImages ={hotelImages} hotelDetails={hotelDetails} hotelAminities={hotelAminities} roomTypes ={roomTypes} />}
        </Col>
      </Row> }

    </Container>
  )
}

export default OneHotel