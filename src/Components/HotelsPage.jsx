import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import JambotHotelsPage from "./JambotHotelsPage"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import '../styles/customNavbar.css'
import '../styles/customJamb.css'
import '../styles/jambotHotelsPage.css'
import { Audio } from "react-loader-spinner";
const HotelsPage = () => {
  const [hotelName, setHotelName] = useState([]);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [loading , setLoading] = useState(false)
  const [secondLoading , setSecondLoading] = useState(false)
  const location = useLocation();
      const fetchHotels = async () => {
      try {
        let response = await fetch(`https://impalaapi.herokuapp.com/hotels${country.length > 0 ? `?country=${country.toLowerCase()}` : ""}${ country.length > 0 && name.length > 0 ? `&name${name.toLowerCase()}` : country.length === 0 && name.length > 0 ? `?name=${name.toLowerCase()}` : ""}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })
        let data = await response.json();
        setHotelName(data.allHotels);
        console.log(data);
        console.log(response);
        setLoading(false);
        setSecondLoading(true)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
    const timer =  setTimeout(() => {
        setSecondLoading(false)
      }, 1000);
      return () => clearTimeout(timer);
    },[hotelName])
  useEffect(() => {
    fetchHotels();
    setLoading(true)
    console.log(hotelName, 'this is ur array');
    console.log(location.pathname, "the path name");
  }, [])
  return (
    <>
    {loading===true ? 
  <Col xs={12}>
    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
<Audio
    height = "100"
    width = "100"
    radius = "9"
    color = 'purple'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
  />
  </div>
  </Col>: <Container fluid>
      <Row>
        <Col sm={12}>
          <JambotHotelsPage />
        </Col>
        <div className='formInputHotels shadow-lg px-2 py-2'>
          <Row>
            <Col sm={12}>
              <h6 className='hotelJambHeader pb-3 pt-3 text-center smallHeader'>Browse Hotels in Your Destination</h6>
            </Col>
            <Col lg={5} md={12}>
              <InputGroup className="ml-lg-4 pb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default">Country</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={country}
                  onChange={(e) => { setCountry(e.target.value) }}
                />
              </InputGroup>
            </Col>
            <Col lg={5} md={12}>
              <InputGroup className="">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default">Hotel Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                />
              </InputGroup>
            </Col>
            <Col lg={2} md={12}>
              <Button variant="dark" className="px-4 mt-3 mb-2 mt-lg-0 mb-lg-0" onClick={fetchHotels}>Search</Button>
            </Col>
          </Row>
        </div>
        {secondLoading=== true ?
  <Col xs={12}>
    <div className="d-flex justify-content-center" style={{height:"100vh"}}>
<Audio
    height = "100"
    width = "100"
    radius = "9"
    color = 'purple'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
  />
  </div>
  </Col> : <Col sm={12}>
          <HotelCard hotelName={hotelName} />
        </Col>}
        
      </Row>
    </Container>}
    
    </>
  )
}

export default HotelsPage