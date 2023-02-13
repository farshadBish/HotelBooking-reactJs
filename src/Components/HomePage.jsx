
import { useEffect } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import CustomJambot from './CustomJambot'
import HotelCarousel from './HotelCarousel'
import WeatherComponent from './WeatherComponent'


function HomePage() {

  // const fetchHotels = async () =>{
  //   try {
  //     let response = await fetch('http://fake-hotel-api.herokuapp.com/api/hotels',{
  //       method : 'GET',
  //       headers : {
  //         "Content-Type" : "application/json",
  //       }
  //     })
  //     let data = response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //   fetchHotels()
  // },[])
  useEffect(()=>{
    alert("Site is currently updating some features might have stopped working please visit later when updates are done :) ")
  })

  return(
    <Container fluid className=''>
        <Row>
          <Col sm={12}>
          <CustomJambot/>
          </Col>
          <Col sm={12}>
          <HotelCarousel/>
          </Col>
          <Col>
          <WeatherComponent/>
          </Col>
        </Row>
    </Container>
  )
}

export default HomePage