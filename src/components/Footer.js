import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
        <Row className='footer'>
            <Col className='py-1 text-center ' style={{backgroundColor:"black",marginTop:"10px"}} >
                Copyright &copy; Restaurants
            </Col>
        </Row>
    </footer>
  )
}

export default Footer