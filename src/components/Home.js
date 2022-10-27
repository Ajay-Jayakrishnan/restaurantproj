import React from 'react'
import {useState,useEffect} from 'react'
import { Row ,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantAction'
import RestaurantCard from './RestaurantCard'

function Home() {

    // const [item,setItem]= useState([])

    // const fetchData = async() =>{
    //     await fetch('/restaurants.json')
    //     .then((res) => res.json())
    //     .then((data) => setItem(data.restaurants))
    const dispatch = useDispatch()
    const result = useSelector(state => state.restaurantReducer)
    const {restaurant} = result
    useEffect(() => {
      dispatch(listRestaurants())
   //fetchData()
    
      
    }, [])

       
    return (
      <div>
        <Row>
        {restaurant.map((items) => (
          
            <Col sm={12} md={6} lg={4} xl={3} >
              <RestaurantCard data= {items}/>
            </Col>
        
        ))}
     </Row>
      </div>
    )
    }
 

    
 


export default Home