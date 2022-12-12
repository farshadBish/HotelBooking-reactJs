import { Col, Container, Row } from "react-bootstrap";
import '../styles/aboutSite.css'

const AboutSite = () => {
    return(
        <Container fluid  className="">
            <Row className="">
                {/* first col  */}
                <Col md={12} lg={6}  className="pr-0 pl-0">
              <div className="firstPicSide d-flex align-items-center justify-content-center text-white text-left">
                <span><h4><b>Welcome to my hotelbooking SandBox WebSite.</b></h4><br/>
                <h5>Here I inform about the techs that I used and what you can achive in this site.</h5></span>
              </div>
                </Col>
                <Col md={12} lg={6}  className="pl-0 mb-lg-2 pr-0">
                <div className="firstPic"></div>
                </Col>
                {/* second col */}
                <Col xl={3} lg={2} className="pr-0 pl-0">
                    <div className="middleLeft d-flex align-items-center justify-content-center text-white">
                    <h1 className="aboutFont">ABOUT</h1>
                    </div>
                </Col>
                <Col xl={6} lg={8} className="pl-0 pr-0">
                    <div className="textCont d-flex align-items-center justify-content-center text-dark text-left">
                    <p className="aboutText">For this site i used <b>1.</b> Impala api that provide me to GET Hotels and also some details about them , <b>2.</b> my own back-end made with <b>Express and mongoDB</b> as database that has the possibility to register/login as admin and user using JWT token and also possibility to book hotels ,  manage the booked hotels and also change the the own user credentials, for admin he can modify the users + modifying all the booking made.<b>3. </b>I used AWS EC2 for run my projects using Nginx and also Heroku for running my back-end <b>4. </b>For front-end I used technologies such as <b>React, Bootstrap</b> and also some react packages such as littebit of React spring and also <b>0 Templates</b> has been used and as i know the site is fully responsive. <b>Workflow:</b> Making an account first because without that, aint possible to book bro after you can search for hotels by the name of country and/or by name of the hotel, then you see some details and information about the hotel if see yourself interested you can click on Book Now button to start booking, afterwards you go to another window where the booking process begins (you dont need to put something in payment page) after your booking is done from navbar you can go to ur profile and see your booking <b>also the Weather is still under development.</b> If interested to see how admin works try to log in as : <b>Email : farshadota@gmail.com<br/> Password: 1234</b></p>
                    </div>
                </Col>
                <Col xl={3} lg={2} className="pl-0 pr-0 mb-lg-2">
                    <div className="middleRight"></div>
                </Col>
                {/* third col */}
                <Col md={12} lg={6} className="pr-0 pl-0">
                <div className="secondPic"></div>
                </Col>
                <Col md={12} lg={6} className="pl-0 pr-0 mb-5">
                <div className="secondPicSide d-flex align-items-center justify-content-center text-white text-left">
                <span><h4><b>Thanks for your time and attention :)</b></h4><br/>
                <h5>If you intrested you can have a look at my second project by clicking <a href="http://rust.farshad.eu" rel="noreferrer" target="_blank" style={{textDecoration:"none",color:"white"}}><b>Here.</b><div className=""></div></a></h5></span>
              </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSite;