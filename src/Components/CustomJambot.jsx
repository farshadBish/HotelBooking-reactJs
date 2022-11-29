import React from "react";
import {
  Col,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";
import "../styles/customNavbar.css";
import "../styles/customJamb.css";

function CustomJambot() {
  return (
    <Jumbotron
      fluid
      className="navbarWidth jambPic pt-0"
      style={{ borderRadius: "20px" }}
    >
      <Container className="pl-0 ml-0">
        <Row className="text-left">
          <Col md={12} className="">
            <div className="gradient" style={{ borderRadius: "20px" }}>
              <img
                src="https://media.discordapp.net/attachments/713873647550464000/991280660314591303/victorops-logo-clr.png"
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
          <img src="small-1.jpg" alt="" className="radius ml-4" />
          <img src="Small-2.jpg" alt="" className="radius" />
          <img src="Small-3.jpg" alt="" className="radius smallPicDisapear" />
          <img src="https://cdn.discordapp.com/attachments/685210402577055758/1046810021469630464/Small-4.jpg" alt="" className="radius smallPicDisapear" />
          <img src="https://cdn.discordapp.com/attachments/685210402577055758/1046810049223327854/Small-5.jpg" alt="" className="radius smallPicDisapear" />
        </div>
      </Container>
    </Jumbotron>
  );
}

export default CustomJambot;
