import React from 'react'

function RestaurantReviews({review}) {
  return (
    <div>
      <h2>Reviews</h2>
        {
          
            review.map((item)=>(
                <div>
                  
                    <h3>{item.name}</h3>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
                </div>
            )
            )
        }
    </div>
  )
}

export default RestaurantReviews