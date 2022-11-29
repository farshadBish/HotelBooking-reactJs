
import { useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { FaRegArrowAltCircleRight,FaAngleDown,FaAngleLeft } from 'react-icons/fa';

const SingleUser = (props) =>{
    const [open,setOpen] = useState(false)


    const removeBooking = async () => {
        try {
          let response = await fetch(
            `http://localhost:3001/users/${props.item._id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${window.localStorage.getItem("SetToken")}`
              },
            }
          );
          if(response.ok){
            window.location.reload()
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
        style={props.myName === props.item.username && props.myRole === props.item.role ? {fontSize:"20px",width:"100%",backgroundColor:"purple",border:"none",borderRadius:"10px 25px 10px 25px"} : props.item.role === "Admin" ? {fontSize:"20px",width:"100%",backgroundColor:"darkblue",border:"none",borderRadius:"10px 25px 10px 25px"} : {fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="#E4D8E6"/></span><div className="eachBookingComponent" style={{fontSize:"17px"}}><b>{props.item.email}</b></div>{open === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>} </div>
      </button>
      <Collapse in={open}>
        <Container>
            <Row>
                <Col md={3} xs={12}>
                <div id="example-collapse-text" className="text-left text-muted px-3" style={{fontSize:"17px"}}>
                    <p className="pt-3">
                    <b>User Name</b> : {props.item.username} , <b>Role</b> : {props.item.role}<br/> <b>Address</b> : {props.item.address} <br/> <b>Active room booking</b> : {props.item.roomsBooked.length > 0 ? <span>Yes ({props.item.roomsBooked.length})</span> : <span>No</span>}
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

export default SingleUser;