import React from 'react'

export default function WaterBottle(props) {
  
    console.log("Props Received:", props);

    return (
    <>
        <div>WaterBottle</div>

        <div>
            {props.name}
            {props.color}
            {props.productId}
        </div>
    
    </>
  )
}
