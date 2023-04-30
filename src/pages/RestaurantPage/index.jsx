import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantBanner from "../../components/RestaurantBanner"
import axios from 'axios'
import { useState } from 'react';

function RestaurantPage() {

    const {restaurant_name} = useParams();
    const [restaurant, setRestaurant] = useState({})
    // console.log(restaurant_name);
    useEffect(() => {
      axios.get(`http://localhost:8080/restaurants/${restaurant_name.toLowerCase()}`).then((res)=> {
        console.log(res.data);
        setRestaurant(res.data)
      }).catch(e=> {
        console.log(`ERROR: ${e}`);
      })
    
    }, [restaurant_name])
    
    


  return (
    <>
        <RestaurantBanner restTitle={restaurant.shownName} subTitle={restaurant.description} restTitleColor="light"/>
    </>
  )
}

export default RestaurantPage