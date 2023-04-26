import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import RestaurantBanner from "../../components/RestaurantBanner"
import axios from 'axios'
// import Navbar from '../../components/Navbar'

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
        {/* <Link to="/"><Button text="Home" /></Link><br/><br/> */}
        <Navbar />
        <RestaurantBanner restTitle={restaurant_name} restTitleColor="light"/>
    </>
  )
}

export default RestaurantPage