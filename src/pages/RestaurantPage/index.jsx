import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import RestaurantBanner from "../../components/RestaurantBanner"
// import Navbar from '../../components/Navbar'

function RestaurantPage() {

    const {restaurant_name} = useParams()

  return (
    <>
        {/* <Link to="/"><Button text="Home" /></Link><br/><br/> */}
        <Navbar />
        <RestaurantBanner restTitle={restaurant_name}/>
    </>
  )
}

export default RestaurantPage