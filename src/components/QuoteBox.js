import React from 'react'
import { Button, CardBody, CardText, Col, Container, Row } from 'reactstrap';
import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

const QuoteBox = ({quote, author, handleClick, color}) => {
  return (
    <Container className="pl-4 pr-4 pt-4 pb-4 col-lg-8 shadow p-3 mb-5 bg-white">
        <Row className="justify-content-center">
          <Col xs="auto">
                  <CardBody className='my-4 quote-card' >
                      <CardText className="text-center" style={{ color: color }}>
                          <FontAwesomeIcon icon={faQuoteLeft} className='fa-solid' />{' '}
                      {quote}                     
                      </CardText>
                      
                  <CardText className="text-end" >
                      <small style={{color: color}}>
                          - {author}
                      </small>
                  </CardText>
              </CardBody>
          </Col>         
        </Row>
          <Row className="justify-content-evenly ">
              <Col xs="auto" >
                  
                  <a href='' target='_blank' style={{color: color}}><FontAwesomeIcon icon={faFacebook} /></a>{' '}
                  <a href={`https://twitter.com/intent/tweet?text=${quote}`} target='_blank' rel="noreferrer" style={{color: color}}>
                  <FontAwesomeIcon icon={faTwitter} /></a>
                  

              </Col>
              <Col xs="auto" >
                  <Button
                      onClick={handleClick}
                      style={{ backgroundColor: color }}
                    className='button'>
                      New quote
                  </Button></Col>
          </Row>
          </Container>
  )
}

export default QuoteBox