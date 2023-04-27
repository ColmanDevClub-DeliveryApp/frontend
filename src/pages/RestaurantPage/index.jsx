import React from 'react'
import { useParams } from 'react-router-dom'
import RestaurantBanner from "../../components/RestaurantBanner"
import axios from 'axios'

function RestaurantPage() {

    const {restaurant_name} = useParams();
    console.log(restaurant_name);
    axios.get(`http://localhost:8080/restaurants/${restaurant_name}`).then((res)=> {
        console.log(res.data);
    }).catch(e=> {
      console.log(`ERROR: ${e}`);
    })


  return (
    <>
        <RestaurantBanner restTitle={restaurant_name.toUpperCase()} restTitleColor="light"/>
    </>
  )
}

export default RestaurantPage