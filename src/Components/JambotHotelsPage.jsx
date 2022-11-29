

import React from 'react'
import { Col, Container,Jumbotron, Row } from 'react-bootstrap'
import '../styles/customNavbar.css'
import '../styles/customJamb.css'
import '../styles/jambotHotelsPage.css'

function JambotHotelsPage() {
    return (
        <Jumbotron fluid className='navbarWidth jamHotelPic pt-0' style={{borderRadius:'20px'}}>
            <Container className='pl-0 ml-0'>
                <Row className='text-left'>
                    <Col md={12} className=''>
                        <div className='gradient' style={{borderRadius:'20px'}}>
                        <img src="https://media.discordapp.net/attachments/713873647550464000/991280660314591303/victorops-logo-clr.png" alt="" className='logo' />
                        <h1 className='ml-3'>Hotels</h1>
                        <p className='ml-3'><b>Enjoy the luxury vacation with your loved ones in our special hotels.</b>
                        </p>
                        <h5 className='ml-3 mt-3 text-white-50 disappearIt'><b>World Wide traveling</b></h5>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    )
}

export default JambotHotelsPage;