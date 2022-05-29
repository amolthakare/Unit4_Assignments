import React from 'react'

const Restaurants = (props) => {
  return (
    <div>
      <div className="container divider">
        <div className="cards">
          {props.restraurant.map((restraurant) =>(
            <div className="card">
            <img width="254" height="160px" src={restraurant.image} />
            <div className="restaurant-details">
              <div className="restaurant-title">{restraurant.name}</div>
              <div className="restaurant-subtitle">{restraurant.category.join(", ")}</div>
            </div>
            <div className="restaurant-info">
              <div className="restaurant-ratings">
                <i className="material-icons star-icon">star</i> {restraurant.rating}
              </div>
              .<div className="restaurant-delivery-timings"> {restraurant.deliveryTiming}</div> .
              <div className="restaurant-cost-for-two">₹ {restraurant.costForTwo} FOR TWO</div>
            </div>
            <div className="offer-banner">
              <span className="material-icons"> local_offer </span>
              <span className="offer-text"> {restraurant.offer}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Restaurants