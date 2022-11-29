import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import JambotHotelsPage from "./JambotHotelsPage"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import '../styles/customNavbar.css'
import '../styles/customJamb.css'
import '../styles/jambotHotelsPage.css'
const HotelsPage = () => {
  const [hotelName, setHotelName] = useState([]);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('italy');
  const [theCountryCode,setTheCountryCode] = useState('ITA')
  const location = useLocation();
      const fetchHotels = async () => {
      try {
        let response = await fetch(`https://corsanywhere.herokuapp.com/https://sandbox.impala.travel/v1/hotels?country[eq]=${theCountryCode}&name[like]=${name === '' ? '[SANDBOX]' : name}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "sandb_H4mKDfmhFDRvZ3zTotHWI9ZjcL4C67hlEMLJagEn",
          }
        })
        let data = await response.json();
        setHotelName(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    const countryCode = async () => {
      try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${country}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        })
        let data = await response.json();
        setTheCountryCode(data[0].cca3)
        console.log(data , "the country code is here");
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      countryCode();
    },[country])
  useEffect(() => {
    fetchHotels();
    console.log(hotelName, 'this is ur array');
    console.log(location.pathname);
  }, [])
  return (
    <Container fluid>
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
                  <InputGroup.Text id="inputGroup-sizing-default">Country*</InputGroup.Text>
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
        <Col sm={12}>
          <HotelCard hotelName={hotelName} />
        </Col>
      </Row>
    </Container>
  )
}

export default HotelsPage