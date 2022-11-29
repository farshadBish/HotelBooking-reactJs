import { useEffect } from "react";
import { useState } from "react";
import { Col, Collapse } from "react-bootstrap";
import { FaAngleDown,FaAngleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/eachRoomType.css"


const EachRoomTypeModal = (props) => {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        // console.log(props.room  ,"this is rooms");
        console.log(props.position,"this is roommm");
    })

    const  navigate = useNavigate()
    const params = useParams()

    const goToRoom = (e) => {
        navigate(`/hotel/${params.id}/${props.position}`)
        console.log(params.id,"thats the biggggg id");
        e.preventDefault();
    }

    return (
        <Col xs={12}>
              <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="text-white p-2 mb-1"
        style={{fontSize:"19px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"15px"}}
      >
      <div className="d-flex justify-content-between "><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="orange"/><b>{props.room.name}</b></span> {open === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>} </div>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="text-left px-3 textContainer" style={{fontSize:"17px"}}>
          <p className="pt-3">
        <b>{props.room.description}</b>
                </p>
                <div className="box-1 d-flex justify-content-start mb-2" onClick={goToRoom}>
            <a href="/" style={{textDecoration:'none'}}>
              <div className="btn btn-one pr-5 pl-5 pt-2 pb-2">
                <span style={{color:"black"}}>Book this room!</span>
              </div>
            </a>
            </div>
                </div>
      </Collapse>
              </Col>
    )
}


export default EachRoomTypeModal