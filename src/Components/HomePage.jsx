
import { useEffect } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
// import CustomJambot from './CustomJambot'
// import HotelCarousel from './HotelCarousel'
// import WeatherComponent from './WeatherComponent'
import React,{ Suspense, lazy } from 'react'
import { Audio } from 'react-loader-spinner'

const HotelCarousel = lazy(()=>(
  import('./HotelCarousel')
  ))
  const WeatherComponent = lazy(()=>(
    import('./WeatherComponent')
    ))
  const CustomJambot = lazy(()=>(
    import('./CustomJambot')
  ))
    // function delayForDemo(promise) {
    //   return new Promise(resolve => {
    //     setTimeout(resolve, 5000);
    //   }).then(() => promise);
    // }

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

  return(
    <Container fluid className=''>
        <Row>
          <Col sm={12}>
            <Suspense fallback={<Audio
    height = "100"
    width = "100"
    radius = "9"
    color = 'purple'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
  />}>
          <CustomJambot/>
          </Suspense>
          </Col>
          <Col sm={12}>
          <HotelCarousel/>
          </Col>
          <Col>
          <Suspense>
          <WeatherComponent/>
          </Suspense>
          </Col>
        </Row>
    </Container>
  )
}

export default HomePage