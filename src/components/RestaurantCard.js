import React from 'react'
import { Card } from 'react-bootstrap'
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore'
import { Link } from 'react-router-dom'


function RestaurantCard({data}) {
  return (
 <Link to={`restaurant/${data.id}`} style={{textDecoration:"none"}}>
        <Card style={{ height:"95%"}} className='p-2 mt-3'>
          <Card.Img variant="top" src={data.photograph} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              <p>Cuisine: {data.cuisine_type}</p>
              <p>Neighbourhood :{data.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>
 </Link>
  )
}

export default RestaurantCard