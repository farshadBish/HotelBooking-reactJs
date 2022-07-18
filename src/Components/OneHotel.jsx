import { useEffect, useState } from "react";
import { BrowserRouter , Routes , Route , useParams} from 'react-router-dom';
import { Button, Col, Container, Form, FormControl, Jumbotron, Row , Carousel } from 'react-bootstrap'
import CustomJambot from "./CustomJambot";
import '../styles/oneHotel.css'
import OneHotelCarousel from "./OneHotelCarousel";
import OneHotelJambot from "./OneHotelJambot";
const OneHotel = () => {
    const params = useParams();
    const [hotelDetails,setHotelDetails] = useState([]);
    const [hotelImages,setHotelImages] = useState([]);
    const [hotelAminities,setHotelAminities] = useState([]);
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
        console.log(data.data);
        setHotelDetails(data.data);
        setHotelAminities(data.data[0].amenities)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      console.log(params.id);
      fetchHotels();
      console.log(hotelDetails);
      console.log(hotelImages);
    },[])
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          { hotelDetails.length > 0 && <OneHotelJambot hotelDetails={hotelDetails}/>}
        </Col>
        <Col sm={12} className='mt-5'>
         { hotelAminities && hotelImages.length > 0 && hotelDetails.length > 0 && <OneHotelCarousel hotelImages ={hotelImages} hotelDetails={hotelDetails} hotelAminities={hotelAminities} />}
        </Col>
      </Row>
    </Container>
  )
}

export default OneHotel