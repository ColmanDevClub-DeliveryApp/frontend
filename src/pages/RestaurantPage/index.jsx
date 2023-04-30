import React, {useEffect} from 'react'
// import { useParams } from 'react-router-dom'
import Style from './styles.module.css'
import RestaurantBanner from "../../components/RestaurantBanner"
// import axios from 'axios'
import { useState } from 'react';
import testRest from "../../DB/restaurantDB"
import RestaurantInfo from "../../components/resturauntInformation"
import List from "../../components/List"
import RestaurantSidebar from "../../components/RestaurantSidebar"


function RestaurantPage() {

    // const {restaurant_name} = useParams();
    const [restaurant, setRestaurant] = useState({})
    const [pageLoaded, setPageLoaded] = useState(false)
    const [catalogTitles, setCatalogTitles] = useState([])

    // useEffect(() => {
    //   axios.get(`http://localhost:8080/restaurants/${restaurant_name.toLowerCase()}`).then((res)=> {
    //     console.log(res.data);
    //     setRestaurant(res.data)
    //   }).catch(e=> {
    //     console.log(`ERROR: ${e}`);
    //   })
    
    // }, [restaurant_name])
    
    useEffect (()=> {
      setRestaurant(testRest)
      setPageLoaded(true)
    }, [])

    useEffect (()=> {
      if (pageLoaded)
        saveCatalogTitles()
    }, [pageLoaded])

    const saveCatalogTitles = ()=> {
      const catTitles =[]
        restaurant.catalog.map((element, index)=> {
          const x = {"url": `/restaurants/bbb#catalog-${index}`, 'title': element.title}
          catTitles.push(x)
        })
        setCatalogTitles(catTitles)
    }
    

  return (pageLoaded&& 
    <>
        <RestaurantBanner img={restaurant.image} restTitle={restaurant.shownName} subTitle={restaurant.description}/>
        <div className={Style.hero}>
          <input className={Style.search} placeholder='חפש בתפריט'/>
          <div className={Style.info_wrapper}>
            <RestaurantInfo openingTimes={restaurant.openingHours} address={`${restaurant.address.street}, ${restaurant.address.city}`} phone={`0${restaurant.phone}`}/>
          </div>
          <div className={Style.menu_container}>
            <div className={Style.menu_wrapper}>
                {restaurant.catalog.map((catalogItem, index) => {
                    return (<div className={Style.list_wrapper} id={`catalog-${index}`}>
                    <List items={catalogItem.dishes} listTitle={catalogItem.title} subTitle={catalogItem.subtitle}/>
                    </div>)
                })}
            </div>
            <nav className={Style.rest_nav}>
              <RestaurantSidebar items={catalogTitles} />
            </nav>
          </div>
        </div>
    </>
  )
}

export default RestaurantPage