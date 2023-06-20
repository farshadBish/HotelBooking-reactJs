
import { useEffect } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
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

function HomePage() {

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