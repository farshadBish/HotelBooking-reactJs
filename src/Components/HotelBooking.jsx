import "../styles/hotelbooking.css";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Audio } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/eachRoomType.css"
import {
  FaCalendarAlt,
  FaHouseUser,
  FaMoneyCheck,
  FaLongArrowAltRight,
  FaCalendarCheck,
  FaUserAlt,
  FaBed,
  FaPlus,
  FaArrowLeft,
  FaCheckSquare,
  FaCcVisa,
  FaLock,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDiscover,
  FaCcAmazonPay,
  FaRegCheckCircle
} from "react-icons/fa";

const HotelBooking = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hotelDetails, setHotelDetails] = useState([]);
  const [bookingSuccessful,setBookingSuccessful] = useState(false);
  // booking states

  const [arriveDate, setArriveDate] = useState(
    new Date().toJSON().slice(0, 10)
  );
  const [departureDate, setDepartureDate] = useState("");
  const [hotelName,setHotelName] = useState("");
  const [city,setCity] = useState("");
  const [country,setCountry] = useState("");
  const [roomName,setRoomName] = useState("");
  const [occupancy,setOccupancy] = useState("");
  const [email , setEmail] = useState("")
  const [price,setPrice] = useState(Number);
  const [notChoosen,setNotChoosen] = useState(false)

  useEffect(()=>{
    if (departureDate<arriveDate || departureDate === arriveDate) {
      setDepartureDate("")
    }
  },[arriveDate,departureDate])

  //for changing pages

  const [datesPage, setDatesPage] = useState(true);
  const [categoryPage, setCategoryPage] = useState(false);
  const [catagoryPageSucc, setCategoryPageSucc] = useState(false);
  const [paymentPage, setPaymentPage] = useState(false);
  const [pageCount,setPageCount] = useState(1);

  const goToCatagory = (e) => {
    if (departureDate === "") {
      setNotChoosen(true)
      e.preventDefault();
    }
    else{
      setPageCount(pageCount+1)
      setNotChoosen(false)
      setDatesPage(false);
      e.preventDefault();
      setCategoryPage(true);
      setPaymentPage(false);
    }
  };

  const goToDates = (e) => {
    setPageCount(pageCount-1)
    setDatesPage(true);
    e.preventDefault();
    setCategoryPage(false);
    setPaymentPage(false);
  };
  const goToPayment = (e,i) => {
    setPageCount(pageCount+1)
    setDatesPage(false);
    e.preventDefault();
    setCategoryPage(false);
    setCategoryPageSucc(true);
    setPaymentPage(true);
    setHotelName(hotelDetails[0].name);
    setCity(hotelDetails[0].address.city);
    setCountry(hotelDetails[0].address.countryName);
    setRoomName(hotelDetails[0].roomTypes[i].name);
    setOccupancy(hotelDetails[0].roomTypes[i].maxOccupancy)
    setPrice((departureDate.slice(8,10)-arriveDate.slice(8,10)) * 2520/(i+4)+".00")
  };
  const goBackToCategory = (e) => {
    setPageCount(pageCount-1)
    setDatesPage(false);
    e.preventDefault();
    setCategoryPage(true);
    setPaymentPage(false);
    setCategoryPageSucc(false);
  };

  const fetchHotels = async () => {
    try {
      let response = await fetch(
        `https://makingcorsanywhere.herokuapp.com/https://sandbox.impala.travel/v1/hotels?hotelIds={${params.id}}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "sandb_H4mKDfmhFDRvZ3zTotHWI9ZjcL4C67hlEMLJagEn",
          },
        }
      );
      let data = await response.json();
      setHotelDetails(data.data);
      console.log(hotelDetails[0], "thats the hotel details");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const BookingRoom = async (e) => {
    e.preventDefault()
    const userInfos = {departureDate, arriveDate ,  hotelName , city , country , roomName , occupancy ,  email }
    try {
        let response = await fetch(`https://impalaapi.herokuapp.com/users/me/bookedRooms`,
        {
            method:"POST",
            headers : {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
            },
            body : JSON.stringify(userInfos),
        })
        if(response.ok){
            let data = await response.json()
            console.log(data , "voilaaa the data");
            setBookingSuccessful(true)
          } else {
            console.log("error with response");
          }
    } catch (error) {
        console.log(error);
    }
  }

  const [userData,setUserData] = useState([])


  const getUser = async () => {
    try {
      let response = await fetch(
        `https://impalaapi.herokuapp.com/users/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
          },
        }
      );
      let data = await response.json();
      setUserData(data)
    } catch (error) {
      console.log(error);
    }
  };
 const usedToken = window.localStorage.getItem("SetToken");
  useEffect(()=>{
    if (window.localStorage.getItem("SetToken")) {
      getUser();
    }
  },[usedToken])

  useEffect(()=>{
    setEmail(userData.email)
  },[userData])

  useEffect(() => {
    // setLoading("true");
    fetchHotels();
  }, []);
  useEffect(() => {
    // setLoading("true");
    setLoading(true);
  }, [datesPage, categoryPage, paymentPage]);
  return (
    <>
    {bookingSuccessful===false ? <>  <Container
      fluid
      className={datesPage === true ? "bookingContainer" : "bookingContainer1"}
    >
      {loading === true && hotelDetails.length < 1 ? (
        <Row style={{ minHeight: "92.5vh" }} className="align-items-center">
          <Col xs={12}>
            <div className="d-flex justify-content-center">
              <Audio
                height="100"
                width="100"
                radius="9"
                color="purple"
                ariaLabel="three-dots-loading"
                wrapperStyle
              />
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <Row
            className="position-fixed"
            style={{ width: "100%", zIndex: "99" }}
          >
            <Col xs={12} className="px-0">
              <div className="processBar">
                {datesPage === true ? (
                  <div className="d-flex">
                    <FaCalendarAlt className="processIconDates align-self-start" />
                    <span className="ml-2 processDates">Dates</span>
                  </div>
                ) : (
                  <div className="d-flex">
                    <FaCalendarCheck className="processIconDatesSuccess align-self-start" />
                    <span className="ml-2 processDatesSuccess">Dates</span>
                  </div>
                )}
                <hr className="middleLine" />
                {categoryPage === true && catagoryPageSucc === false ? (
                  <div className="d-flex">
                    <FaHouseUser className="processIconsOn" />
                    <span className="ml-2 processNamesOn">Catagories</span>
                  </div>
                ) : categoryPage === false && catagoryPageSucc === false ? (
                  <div className="d-flex">
                    <FaHouseUser className="processIcons" />
                    <span className="ml-2 processNames">Catagories</span>
                  </div>
                ) : categoryPage === false && catagoryPageSucc === true ? (
                  <div className="d-flex">
                    <FaCheckSquare className="processIconsSuccess" />
                    <span className="ml-2 processNamesSuccess">Catagories</span>
                  </div>
                ) : (
                  <>ERROR</>
                )}
                <hr className="middleLine" />
                {paymentPage===false ? (
                  <div className="d-flex">
                  <FaMoneyCheck className="processIcons" />
                  <span className="ml-2 processNames">Payment</span>
                </div>
                ): (
                  <div className="d-flex">
                  <FaMoneyCheck className="processIconDates" />
                  <span className="ml-2 processDates">Payment</span>
                </div>
                )}
              </div>
              <div className="processBar2">
                {datesPage === true && categoryPage === false && paymentPage === false ? <div className="d-flex">
                    <FaCalendarAlt className="processIconDates align-self-start" />
                    <span className="ml-2 processDates">Dates</span>
                  </div> : datesPage === false && categoryPage === true && paymentPage === false ? <div className="d-flex">
                    <FaHouseUser className="processIconsOn" />
                    <span className="ml-2 processNamesOn">Catagories</span>
                  </div> : datesPage === false && categoryPage === false && paymentPage === true ? <div className="d-flex">
                  <FaMoneyCheck className="processIconDates" />
                  <span className="ml-2 processDates">Payment</span>
                </div> : <>ERROR</> }
                  <div className="d-flex">
                    <div className="text-white">{pageCount}/3</div>
                  </div>
              </div>
            </Col>
          </Row>
          <div onClick={()=>navigate(`/hotel/${params.id}`)} className="exitButton">X</div>
          {datesPage === true &&
          categoryPage === false &&
          paymentPage === false ? (
            <span className="makeItVisible">
              <Row
                className="d-flex align-items-center"
                style={{ minHeight: "92.5vh" }}
              >
                <Col className="shadow-lg ">
                  <div className="datesContainer mx-auto shadow-lg">
                    <Row className="pt-3 mx-0">
                      <Col xs={5}>
                        <p className="text-left ">Arrival</p>
                      </Col>
                      <Col xs={2}>
                        <FaLongArrowAltRight style={{ fontSize: "30px" }} />
                      </Col>
                      <Col xs={5}>
                        <p className="text-right ">Departure</p>
                      </Col>
                    </Row>
                    <Row className="mx-0">
                      <Col className="text-left" xs={6}>
                        <div>
                          <input
                            type="date"
                            id="start"
                            name="trip-start"
                            value={arriveDate}
                            onChange={(e) => {
                              setArriveDate(e.target.value);
                            }}
                            min={new Date().toJSON().slice(0, 10)}
                          ></input>
                        </div>
                      </Col>
                      <Col className="text-right" xs={6}>
                        <div>
                          <input
                            type="date"
                            id="start"
                            name="trip-start"
                            value={departureDate}
                            onChange={(e) => {
                              setDepartureDate(e.target.value);
                            }}
                            min={arriveDate}
                          ></input>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="">
                        <div
                          className="box-1 d-flex justify-content-center mt-5"
                          onClick={goToCatagory}
                        >
                          <a href="/" style={{ textDecoration: "none" }}>
                            <div
                              className="btn btn-one pt-2 pb-2"
                            >
                              <span style={{ color: "white" }}>
                                Continue to Rooms
                              </span>
                            </div>
                          </a>
                        </div>
                      </Col>
                      {notChoosen === true ? <Col><div className="mt-2 text-danger" style={{fontSize:"13px"}}>Please choose departure date</div></Col> : <></>}
                    </Row>
                  </div>
                </Col>
              </Row>
            </span>
          ) : datesPage === false &&
            categoryPage === true &&
            paymentPage === false ? (
            <div style={{ minHeight: "92.5vh" }}>
              <Row className="d-flex justify-content-center mr-0" style={{}}>
                <Row className="">
                  <Col xs={12} className="mt-5">
                    <h4 style={{ color: "white" }} className="mt-5">
                      <b>Select a RoomType</b>
                    </h4>
                  </Col>
                  <Col xs={12}>
                    <div className="d-flex justify-content-center text-white-50 mt-1">
                      <div>
                        <FaCalendarAlt className="mb-1 mr-2" />
                      </div>
                      <div>
                        {arriveDate} / {departureDate}
                      </div>
                    </div>
                  </Col>
                    <div className="back-button">
                      <span className="" onClick={goToDates}>
                        {" "}
                        <FaArrowLeft className="mr-1" />
                        <b>Back</b>{" "}
                      </span>
                    </div>
                  {hotelDetails[0].roomTypes.map((item, i) => (
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      key={i}
                      className="mt-4 mb-4 mr-0 pr-0"
                    >
                      <Container
                        className="roomContainer"
                        style={{ width: "95%" }}
                      >
                        <Row className="">
                          <Col xs={12} className="">
                            <Image
                              src={item.images[0].url}
                              height="100%"
                              width="100%"
                              className="pt-3 pb-2"
                              style={{
                                objectFit: "cover",
                                minHeight: "300px",
                                maxHeight: "300px",
                                borderRadius: "20px",
                              }}
                            />
                          </Col>
                          <Col xs={12}>
                            <h5 className="text-left text-white">
                              {item.name}
                            </h5>
                          </Col>
                          <Col xs={7} className="text-left mt-2">
                            <div>
                              <b>
                                <FaUserAlt
                                  className="mb-2 mr-1"
                                  style={{ color: "#EFC1CD", fontSize: "18px" }}
                                />{" "}
                                <span
                                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                                >
                                  Maximum person: {item.maxOccupancy}{" "}
                                </span>
                              </b>{" "}
                            </div>
                          </Col>
                          <Col xs={5} className="mt-2 text-left">
                            <div>
                              {" "}
                              <b>
                                <FaBed
                                  className="mb-1 mr-1"
                                  style={{ color: "#EFC1CD", fontSize: "18px" }}
                                />{" "}
                                <span
                                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                                >
                                  Available: {Math.floor(Math.random() * 10)}
                                </span>
                              </b>
                            </div>
                          </Col>
                          <Col xs={12} className="text-left mt-3">
                            <div>
                              <FaPlus
                                className="text-white mr-1 mb-1"
                                style={{ fontSize: "18px" }}
                              />{" "}
                              <span
                                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                              >
                                More
                              </span>
                            </div>
                          </Col>
                          <Col xs={12} className="text-left mt-3">
                            <div>
                              <p className="text-muted">
                                <b>From</b>
                              </p>
                            </div>
                          </Col>
                          <Col xs={6} style={{ marginTop: "-1.2rem" }}>
                            <div>
                              <p className="text-left text-white">
                                <span style={{ fontSize: "25px" }}>
                                  ${2520/(i+4)}.00
                                </span>{" "}
                                <span style={{ fontSize: "15px" }}>
                                  Nightly
                                </span>
                              </p>
                            </div>
                          </Col>
                          <Col
                            xs={6}
                            style={{ marginTop: "-2.5rem" }}
                            className="d-flex justify-content-end align-items-center"
                          >
                            <button
                              style={{ backgroundColor: "#EFC1CD" }}
                              className="BrowseBtn text-dark"
                              onClick={(e)=>goToPayment(e,i)}
                            >
                              <b>Select this room</b>
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  ))}
                </Row>
              </Row>
            </div>
          ) : datesPage === false &&
            categoryPage === false &&
            paymentPage === true ? (
            <div style={{ minHeight: "92.5vh" }}>
              <Row>
                <Col xs={12} className="mt-5">
                  <h4 style={{ color: "white" }} className="mt-5 mb-5">
                    <b>Payment details</b>
                  </h4>
                </Col>
                <div className="back-button">
                      <span className="" onClick={goBackToCategory}>
                        {" "}
                        <FaArrowLeft className="mr-1" />
                        <b>Back</b>{" "}
                      </span>
                    </div>
                <Col xs={12}>
                  <Container className="roomContainer pb-4 ">
                    <Row className="">
                      <Col xs={12}>
                        <div
                          className="mt-3 d-flex align-items-center justify-content-center"
                          style={{
                            backgroundColor: "#202023",
                            borderRadius: "4px",
                            minHeight: "12vh",
                          }}
                        >
                          <Row className="">
                            <Col xs={7} className="">
                              <div className="text-white">
                                <FaLock className="mb-1 mr-2" />
                                <span>
                                  <b>Secured payment with different methods</b>
                                </span>
                              </div>
                            </Col>
                            <Col xs={5} className="align-self-center">
                              <div className="text-success">
                                <FaCcVisa
                                  className="mr-2"
                                  style={{ fontSize: "30px" }}
                                />
                                <FaCcMastercard
                                  className="mr-2"
                                  style={{ fontSize: "30px" }}
                                />
                                <FaCcPaypal style={{ fontSize: "30px" }} className="mr-2"/>
                                <FaCcDiscover style={{ fontSize: "30px" }} className="mr-2"/>
                                <FaCcAmazonPay style={{ fontSize: "30px" }}/>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md={6} className="text-center text-md-left mt-2">
                        <label>
                          <span className="text-white-50">
                          Payment card number*
                          </span>
                        <input
                          style={{backgroundColor:"transparent",border:"gray 1px solid",borderRadius:"3px"}}
                          className="p-1 payments"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                        </label>
                      </Col>
                      <Col md={3} className="mt-2 text-center text-md-left">
                        <label>
                        <span className="text-white-50">
                          Expiration (MM/YY)*
                          </span>
                          <input
                          style={{backgroundColor:"transparent",border:"gray 1px solid",borderRadius:"3px"}}
                          className="p-1 expiration"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                        </label>
                      </Col>
                      <Col md={3} className="text-center text-md-left mt-2">
                        <label>
                        <span className="text-white-50">
                          CVV*
                          </span>
                          <input
                          style={{backgroundColor:"transparent",border:"gray 1px solid",borderRadius:"3px"}}
                          className="p-1 Cvv"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                        </label>
                      </Col>
                      <Col md={6} className="text-center text-md-left mt-2">
                      <label>
                        <span className="text-white-50">
                          Name on card*
                          </span>
                          <input
                          style={{backgroundColor:"transparent",border:"gray 1px solid",borderRadius:"3px"}}
                          className="p-1 nameOnCards" 
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                        </label>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8} className='text-left'>
                      <div className="mt-3" style={{fontSize:"20px",color:"whitesmoke"}}><b>{roomName}</b></div>
                      </Col>
                      <Col xs={4} className="text-right">
                        <div className="text-white mt-3" style={{fontSize:"20px"}}><b>${price}</b></div>
                      </Col>
                      <Col xs={12} className="text-left">
                        <div className="text-white-50" style={{fontSize:"15px",marginTop:"-0.2rem"}}>
                        for {departureDate.slice(8,10)-arriveDate.slice(8,10)} days
                        </div>
                        <hr style={{backgroundColor:"gray"}}/>
                      </Col>
                      <Col xs={8} className="text-left">
                        <div className="text-white-50">
                          <b>TVA 7%</b>
                        </div>
                      </Col>
                      <Col xs={4} className="text-right">
                        <div className="text-white-50"><b>${Math.floor(price*(7/100))}.00</b></div>
                      </Col>
                      <Col xs={12} className="text-right">
                        <div className="text-white-50" style={{fontSize:"15px",marginTop:"-0.2rem"}}>Taxes included in price</div>
                        <hr style={{backgroundColor:"gray"}}/> 
                      </Col>
                      <Col xs={8} className="text-left">
                        <div className="text-white" style={{fontSize:"23px"}}>
                          <b>Total</b>
                        </div>
                      </Col>
                      <Col xs={4} className="text-right">
                        <div className="text-white" style={{fontSize:"23px"}}>
                          <b>${price}</b>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col
                            xs={12}
                            className="d-flex justify-content-center align-items-center mt-4"
                          >
                            <button
                              style={{ backgroundColor: "#EFC1CD",fontSize:"17px",paddingLeft:"1rem",paddingRight:"1rem"}}
                              className="BrowseBtn text-dark"
                              onClick={(e)=>BookingRoom(e)}
                            >
                              <b>Confirm</b>
                            </button>
                          </Col>
              </Row>
            </div>
          ) : (
            <Row>ERROR</Row>
          )}
        </>
      )}
    </Container> </>: 
    <Container fluid onClick={()=>navigate(`/hotel/${params.id}`)} className="successBookingPage" style={{minHeight:"100vh"}}>
      <Row style={{minHeight:"100vh"}} className="justify-content-center align-items-center">
        <Col xs={12}>
        <FaRegCheckCircle className="text-white" style={{fontSize:"80px"}}/><p className="text-white bookingWasSuccesfull">Booking Succesfull!</p>
        <span className="text-white-50">Click anywhere to continue</span>
        </Col>
      </Row>
    </Container> }
    </>
  );
};

export default HotelBooking;
