import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Row,Col,Image, ListGroup,ListGroupItem,Card} from 'react-bootstrap'
import RestaurantReviews from './RestaurantReviews'


function RestaurantDetails() {
  const [data,setData]= useState([])
  const params = useParams()

    const fetchData = async() =>{
        await fetch('/restaurants.json')
        .then((res) => res.json())
        .then((dat) => setData(dat.restaurants))
    }
 

    useEffect(() => {
   fetchData()
    
      
    }, [])
    console.log(data);

    const details = data.find((i) => i.id == params.id)
    console.log(details);
  return (
    <div>
      {
        details ? (
      <div>
        <Row className='my-3 mx-1'>
          <Col md={3}>
          <Image  className='img' src={details.photograph} fluid />
          </Col>
          <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h2>{details.name}</h2>
              <p>{details.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cuisine:{details.cuisine_type}</p>
             
            </ListGroup.Item>
            <ListGroup.Item>
          
              <p>Address:{details.address}</p>
            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col >
          <ListGroup>
            <h1>Operating Hours</h1>
            <ListGroupItem>Monday:{details.operating_hours.Monday}</ListGroupItem>
            <ListGroupItem>Tuesday:{details.operating_hours.Tuesday}</ListGroupItem>
            <ListGroupItem>Wednesday{details.operating_hours.Wednesday}</ListGroupItem>
            <ListGroupItem>Thursday:{details.operating_hours.Thursday}</ListGroupItem>
            <ListGroupItem>Friday:{details.operating_hours.Friday}</ListGroupItem>
            <ListGroupItem>Saurday:{details.operating_hours.Saturday}</ListGroupItem>
            <ListGroupItem>Sunday:{details.operating_hours.Sunday}</ListGroupItem>
          </ListGroup>
          </Col>
        </Row>
        <Row className='my-2 mx-2'>
           <Card >
            <RestaurantReviews review ={details.reviews}/>
          </Card>

        </Row>
      </div>
        ):'null'
}
    </div>
  )
}

export default RestaurantDetails