import React from "react";
import {
  Col,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";
import "../styles/customNavbar.css";
import "../styles/customJamb.css";
import {animated , useSpring} from "@react-spring/web";
import { useState } from "react";

function CustomJambot() {
  
  const [starters,setStarters] = useState(true)

  const firstSpring = useSpring({
    from : { scale: 0 , rotate: 0},
    to: [{scale: 1.2,rotate: 180},
    {scale: 1,rotate: 360}],
    config: {
        duration: 800
    },
});
const secondSpring = useSpring({
  from : { scale: 0 , rotate: 0},
  to: [{scale: 1.2,rotate: 180},
  {scale: 1,rotate: 360}],
  config: {
      duration: 800
  },
  delay: 200
});
const thirdSpring = useSpring({
  from : { scale: 0 , rotate: 0},
  to: [{scale: 1.2,rotate: 180},
  {scale: 1,rotate: 360}],
  config: {
      duration: 800
  },
  delay: 300
});
const forthSpring = useSpring({
  from : { scale: 0 , rotate: 0},
  to: [{scale: 1.2,rotate: 180},
  {scale: 1,rotate: 360}],
  config: {
      duration: 800
  },
  delay: 400
});
const fifthSpring = useSpring({
  from : { scale: 0 , rotate: 0},
  to: [{scale: 1.2,rotate: 180},
  {scale: 1,rotate: 360}],
  config: {
      duration: 800
  },
  delay: 500
});
const [active,setActive] = useState(true)

const clickSpring = useSpring({
  
})
const [firstTrigger,setFirstTrigger] = useState(false);
const [secondTrigger,setSecondTrigger] = useState(false);
const [thirdTrigger,setThirdTrigger] = useState(false);
const [forthTrigger,setForthTrigger] = useState(false);
const [fifthTrigger,setFifthTrigger] = useState(false);

// pic change
const [firstPic,setFirstPic] = useState("https://media.discordapp.net/attachments/713873647550464000/991280660314591303/victorops-logo-clr.png")
const [secondPic,setSecondPic] = useState("small-1.jpg")
const [thirdPic,setThirdPic] = useState("hotelPic.jpg")
const [forthPic,setForthPic] = useState("Small-3.jpg")
const [fifthPic,setFifthPic] = useState("https://cdn.discordapp.com/attachments/685210402577055758/1046810021469630464/Small-4.jpg")
const [sixthPic,setSixthPic] = useState("https://cdn.discordapp.com/attachments/685210402577055758/1046810049223327854/Small-5.jpg")
const picChanger = (e,main,first,second,third,forth) => {
  setStarters(false)
  main(true)
  first(false)
  second(false)
  third(false)
  forth(false)
}
  return (
    <Jumbotron
      fluid
      className="navbarWidth jambPic pt-0"
      style={{ borderRadius: "20px",marginBottom:"20rem"}}
    >
      <Container className="pl-0 ml-0">
        <Row className="text-left">
          <Col md={12} className="">
            <div className="gradient" style={{ borderRadius: "20px" }}>
              <img
                src={firstPic}
                alt=""
                className="logo"
              />
              <h1 className="ml-3">Dream Vacation</h1>
              <p className="ml-3">
                <b>
                  Enjoy the luxury vacation with your loved ones in our special
                  hotels.
                </b>
              </p>
              <h5 className="ml-3 mt-3 text-white-50 disappearIt">
                <b>World Wide traveling</b>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="formInput shadow-lg">
          <h6 className="border-bottom pb-3 pt-3 text-center  smallHeader">
            More About Us
          </h6>
          <p>
            Here we provide you the available hotels and the weather temperature
            of your desired city.
          </p>
          <animated.img onClick={(e)=>picChanger(e,setFirstTrigger,setSecondTrigger,setThirdTrigger,setForthTrigger,setFifthTrigger)}  style={starters===true ? firstSpring  : {}}  src={secondPic} alt="" className="radius ml-4" />
          <animated.img onClick={(e)=>picChanger(e,setSecondTrigger,setFirstTrigger,setThirdTrigger,setForthTrigger,setFifthTrigger)}  style={starters===true ? secondSpring : {}}  src={thirdPic}  alt="" className="radius" />
          <animated.img onClick={(e)=>picChanger(e,setThirdTrigger,setFirstTrigger,setSecondTrigger,setForthTrigger,setFifthTrigger)}  style={starters===true ? thirdSpring  : {}}  src={forthPic}  alt="" className="radius smallPicDisapear" />
          <animated.img onClick={(e)=>picChanger(e,setForthTrigger,setFirstTrigger,setSecondTrigger,setThirdTrigger,setFifthTrigger)}  style={starters===true ? forthSpring  : {}}  src={fifthPic}  alt="" className="radius smallPicDisapear" />
          <animated.img onClick={(e)=>picChanger(e,setFifthTrigger,setFirstTrigger,setSecondTrigger,setThirdTrigger,setForthTrigger)}  style={starters===true ? fifthSpring  : {}}  src={sixthPic}  alt="" className="radius smallPicDisapear" />
        </div>
      </Container>
    </Jumbotron>
  );
}

export default CustomJambot;
