import React from 'react'
import {useState,useEffect} from 'react'
import { Row ,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'

function Home() {

    const [item,setItem]= useState([])

    const fetchData = async() =>{
        await fetch('/restaurants.json')
        .then((res) => res.json())
        .then((data) => setItem(data.restaurants))
    }
 

    useEffect(() => {
   fetchData()
    
      
    }, [])
        
  return (
    <Row>
    {item.map((items) => (
      
        <Col sm={12} md={6} lg={4} xl={3}  >
          <RestaurantCard data= {items}/>
        </Col>
    
    ))}
 </Row>
  )
}

export default Home