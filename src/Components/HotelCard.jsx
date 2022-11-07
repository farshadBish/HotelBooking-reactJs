import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import '../styles/hotelCard.css'
import HotelCardSingle from './HotelCardSingle';


const HotelCard = (props) => {


  return (
    <div className='allCardContain'>
        <Container style={{borderLeft:'purple 7px solid'}}>
          <Row style={{ borderRadius:'20px'}} className='ml-1 mr-1'>
            <Col xs={12}>
        <h1 className='display-3 cardHeader'>Our Hotels</h1>
        </Col>
        {props.hotelName.map((item,i) => (
          <HotelCardSingle item={item} key={i} />
        ))}
</Row>
</Container>
</div>
  )
}
export default HotelCard