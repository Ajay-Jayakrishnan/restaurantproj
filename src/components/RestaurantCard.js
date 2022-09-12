import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function RestaurantCard({data}) {
  return (
 <Link to={`restaurant/${data.id}`}>
        <Card style={{ width: '18rem' }} className='p-2 mt-3'>
          <Card.Img variant="top" src={data.photograph} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              <p>{data.cuisine_type}</p>
              <p>{data.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>
 </Link>
  )
}

export default RestaurantCard