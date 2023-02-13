import { useEffect, useState } from "react";
import { Col,Container, Form, Nav, Row, Tab } from "react-bootstrap";
import "../styles/myProfile.css"
import { FaRegCheckCircle  } from 'react-icons/fa';
import SingleBookedRoom from "./SingleBookedRoom";
import SingleUser from "./SingleUser";
import { useNavigate } from "react-router-dom";
import SingleAllUsersBookings from "./SingleAllUsersBookings";


const MyProfile = () => {
          // menu
          const [firstTwoToWhite,setFirstTwoToWhite] = useState(false)
          const [thirdToWhite,setThirdToWhite] = useState(false)
          const [forthToWhite , setForthToWhite] = useState(false)
      
          
      
          const makingFirstWhite = () => {
              setFirstTwoToWhite(false);
              setThirdToWhite(false)
              setForthToWhite(false)
          }
      
          const makingSecondWhite = () => {
              setFirstTwoToWhite(true);
              setThirdToWhite(false)
              setForthToWhite(false)
          }
      
          const makingThirdWhite = () => {
              setFirstTwoToWhite(null);
              setThirdToWhite(true)
              setForthToWhite(false)
          }
          const makingForthWhite = () =>{
            setForthToWhite(true);
            setFirstTwoToWhite(null)
            setThirdToWhite(null)
          }




          const [userData,setUserData] = useState([])


          const fetchHotels = async () => {
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

          const [bookedRooms,setBookedRooms] = useState([]);

          const bookingDetails = async () => {
            try {
              let response = await fetch(
                `https://impalaapi.herokuapp.com/users/me/bookedRooms`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
                  },
                }
              );
              let data = await response.json();
              setBookedRooms(data)
            } catch (error) {
              console.log(error);
            }
          };

          
          const updateDetails = async (e) => {
            e.preventDefault()
            const userInfos = {username , email , address}
            try {
                let response = await fetch(`https://impalaapi.herokuapp.com/users/me`,
                {
                    method:"PUT",
                    headers : {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
                    },
                    body : JSON.stringify(userInfos),
                })
                if(response.ok){
                    let data = await response.json()
                    console.log(data , "voilaaa the data");
                    alert("Succed")
                  } else {
                    console.log("error with response");
                  }
            } catch (error) {
                console.log(error);
            }
          }
          const [username , setusername] = useState('');
          const [email , setemail] = useState('');
          const [address,setAddress] = useState('');
        
          useEffect(()=>{
            console.log(userData, "thats the userrrr");
            console.log(bookedRooms , "thats the data of bookedrooms");
            // console.log(allUsersBookings,"thats all the users bookings");
            setusername(userData.username);
            setemail(userData.email)
            setAddress(userData.address)
          },[userData])


        const usedToken = window.localStorage.getItem("SetToken")
        const [isAdmin,setIsAdmin] = useState(false)
            useEffect(()=>{
              if (window.localStorage.getItem("SetToken")) {
                fetchHotels();
                bookingDetails();
              }
              if (userData.role === "Admin"){
                setIsAdmin(true);
              }
            },[usedToken])

            const [allUsers,setAllUsers] = useState([])

            const getAllUsers = async () => {
              try {
                let response = await fetch(
                  `https://impalaapi.herokuapp.com/users`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
                    },
                  }
                );
                let data = await response.json();
                setAllUsers(data)
              } catch (error) {
                console.log(error);
              }
            };
            useEffect(()=>{
              if (userData.role === "Admin") {
                getAllUsers()
                // getAllUsersBookings();
                console.log(allUsers,"thats all user");
              }
            },[userData])

            const navigate = useNavigate()
            const [deletingSuccessful,setDeletingSuccessful] = useState(false);
            const DeleteMyAccount = async (e) => {
              e.preventDefault()
              try {
                let response = await fetch(
                  `https://impalaapi.herokuapp.com/users/me`,
                  {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
                    },
                  }
                );
                if(response.ok){
                  window.localStorage.removeItem("SetToken")
                  setDeletingSuccessful(true)
                } else{
                  console.log("deleting Error");
                }
              } catch (error) {
                console.log(error);
              }
            };

            // const [allUsersBookings,setAllUsersBookings] = useState([])
            // const getAllUsersBookings = async () => {
            //   try {
            //     let response = await fetch(
            //       `https://impalaapi.herokuapp.com/users/bookedRooms`,
            //       {
            //         method: "GET",
            //         headers: {
            //           "Content-Type": "application/json",
            //           "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
            //         },
            //       }
            //     );
            //     let data = await response.json();
            //     setAllUsersBookings(data)
            //   } catch (error) {
            //     console.log(error);
            //   }
            // };

    return(
        <>
          {deletingSuccessful === false ?   <Container className="mb-5">         <Row className="mt-5 mainContainerAnimation" style={{backgroundColor:"#E4D8E6",minHeight:"75vh",borderRadius:"20px"}}>
                <Col xs={12} className="">
                    <h2 className="display-3 shadow-lg theProfileHeader"><span className="">My Profile</span></h2>
                </Col>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="py-md-5 mt-sm-0 mt-5 mt-md-5 mr-0 ml-0">
    <div className="mainMiddleContent">
    <Col xs={12}>
      <Nav className="pt-md-2 contentstabs d-flex justify-content-center">
        <Col xs={12} lg={3}>
        <Nav.Item>
          <Nav.Link className={firstTwoToWhite === false ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 " : "firstStyle ml-md-0 mr-md-0 ml-5 mr-5 mt-2 pt-3  border-left border-right "} onClick={makingFirstWhite} eventKey="first"><h5><b>Details</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
        <Col xs={12} lg={3}>
        <Nav.Item>
          <Nav.Link className={firstTwoToWhite === true ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 " : "firstStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5  border-left border-right "} onClick={makingSecondWhite} eventKey="second"><h5><b>Bookings</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
        { isAdmin === true ? <>
        <Col>
        <Nav.Item xs={12} lg={3}>
          <Nav.Link className={thirdToWhite === true ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 " : "firstStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5  border-left border-right "}  onClick={makingThirdWhite} eventKey="third"><h5><b>Accounts</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
        <Col xs={12} lg={3}>
        <Nav.Item>
          <Nav.Link className={forthToWhite === true ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 " : "firstStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5  border-left border-right "}  onClick={makingForthWhite} eventKey="forth"><h5><b>All Rooms</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
        </> : <></>}
      </Nav>
      {/* style={thirdToWhite === true ? {backgroundColor:"white",color:"black"} : {backgroundColor:"black",color:"white"}} */}
    </Col>
    <Col md={12}>
      <Tab.Content className="text-white mainContents mt-md-5 mt-4">
        <Tab.Pane eventKey="first">
          <Container>
            <Row style={{borderRadius:"10px"}} className="shadow-lg mb-5">
              <Col xs={12} className="">
         <h3 className="display-4 text-left mb-3 connentingContainer pl-4 py-2"><b>Account Details</b></h3>
              </Col>
              <Col>
              <Form.Group controlId="formBasicEmail" className="text-dark">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e)=> setemail(e.target.value)}
                        style={{width:"100%"}}
                        className="ml-auto mr-auto"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} style={{fontSize:"17px"}} className="text-dark">
                    <Form.Group controlId="formBasicUser" className="">
                      <Form.Label>
                        <b>User Name</b>
                      </Form.Label>
                      <Form.Control 
                      type="text"
                       value={username}
                       onChange={(e)=> setusername(e.target.value)}
                       style={{width:"100%"}}
                       className="ml-auto mr-auto"/>
                       
                    </Form.Group>
                  </Col>
                    <Col xs={12} style={{fontSize:"17px"}} className="text-dark">
                    <Form.Group controlId="formBasicAddress" className="">
                      <Form.Label>
                        <b>Address</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                        style={{width:"100%"}}  
                        className="ml-auto mr-auto mb-3"
                      />
                    </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                    <button onClick={(e)=>updateDetails(e)} className="noselect mb-4 mt-4 joinButton"><b>Save Changes</b></button>
                    </Col>
                    <Col xs={12} sm={6}>
                    <button style={{backgroundColor:"red"}} onClick={(e)=>DeleteMyAccount(e)} className="noselect mb-4 mt-1 mt-sm-4 joinButton"><b>Delete Account</b></button>
                    </Col>
            </Row>
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Container>
            <Row style={{borderRadius:"10px"}} className="shadow-lg mb-5 pb-3">
              <Col xs={12} className="">
         <h3 className="display-4 text-left mb-3 connentingContainer pl-4 py-2"><b>Your Bookings</b></h3>
              </Col>
          {bookedRooms.length === 0 ?<Col xs={12}> <div className="text-dark"><b>You have no rooms booked in progress</b></div></Col> : bookedRooms.map((item,i) => (
                <SingleBookedRoom item={item} key={i}/>
              ))}
            </Row>
          </Container>
        </Tab.Pane>
        {userData.role === "Admin" ? <>
        <Tab.Pane eventKey="third">
          <Container>
            <Row style={{borderRadius:"10px"}} className="shadow-lg mb-5 pb-3">
              <Col xs={12} className="">
         <h3 className="display-4 text-left mb-3 connentingContainer pl-4 py-2"><b>All <span>Accounts</span></b></h3>
              </Col>
              {allUsers.map((item,i)=>(
                <SingleUser item={item} key={i} myName={userData.username} myRole={userData.role}/>
              ))}
            </Row>
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="forth">
          <Container>
            <Row style={{borderRadius:"10px"}} className="shadow-lg mb-5 pb-3">
              <Col xs={12} className="">
         <h3 className="display-4 text-left mb-3 connentingContainer pl-4 py-2"><b>All Booked <span>Rooms</span></b></h3>
              </Col>
              {allUsers.map((item,i) => item.roomsBooked.map((aRoom,x)=>(
                <SingleAllUsersBookings item={item} items={aRoom} key={x}/>
              )))}
            </Row>
          </Container>
        </Tab.Pane>
        </> : <></>}
        </Tab.Content>
        </Col>
        </div>
        </Row>
        </Tab.Container>
            </Row></Container> : <Container fluid onClick={()=>navigate(`/`)} className="deletingBookingPage" style={{minHeight:"100vh"}}>
      <Row style={{minHeight:"100vh"}} className="justify-content-center align-items-center">
        <Col xs={12}>
        <FaRegCheckCircle className="text-white" style={{fontSize:"80px"}}/><p className="text-white bookingWasSuccesfull">Account deleted!</p>
        <span className="text-white-50">Click anywhere to continue</span>
        </Col>
      </Row>
    </Container>} </>

    )
}

export default MyProfile;