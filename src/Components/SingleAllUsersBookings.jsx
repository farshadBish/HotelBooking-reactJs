import { useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { FaRegArrowAltCircleRight,FaAngleDown,FaAngleLeft } from 'react-icons/fa';

const SingleAllUsersBookings = (props) =>{
    const [open,setOpen] = useState(false)


    const removeBooking = async () => {
        try {
          let response = await fetch(
            `https://customhotels-494f8951a67d.herokuapp.com/users/${props.item._id}/bookedRooms/${props.items._id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
              },
            }
          );
          if(response.ok){
            props.setAccountRefresh(!props.accountRefresh)
          }else{
            console.log("Deleteing Error");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <Col xs={12} style={{fontSize:"17px"}}>
              <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="text-white mt-3 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="#E4D8E6"/></span><div className="eachBookingComponent" style={{fontSize:"17px"}}><b>{props.items.email}</b></div> {open === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>} </div>
      </button>
      <Collapse in={open}>
        <Container>
            <Row>
                <Col md={9} xs={12}>
                <div id="example-collapse-text" className="text-left text-muted px-3" style={{fontSize:"17px"}}>
                <p className="pt-3">
                    <b>Country</b> : {props.items.country} , <b>City</b> : {props.items.city} <br/> <b>Arriving Date</b> : {props.items.arriveDate} , <b>Departure Date</b> : {props.items.departureDate} <br/> <b>Room Name</b> : {props.items.roomName} , <b>Occupancy</b> : {props.items.occupancy} person
                    </p>
                </div>
                </Col>
                <Col md={3} xs={12} className="align-self-center">
                <button
                              style={{ backgroundColor: "red",fontSize:"17px",paddingLeft:"1rem",paddingRight:"1rem"}}
                              className="BrowseBtn text-dark"
                              onClick={removeBooking}
                            >
                              <b>Remove</b>
                            </button>
                </Col>
            </Row>
        </Container>
      </Collapse>
              </Col>
    )
}

export default SingleAllUsersBookings;