import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Style from './styles.module.css'
import RestaurantBanner from "../../components/RestaurantBanner"
import axios from 'axios'
import { useState } from 'react';
import testRest from "../../DB/restaurantDB"
import RestaurantInfo from "../../components/RestaurantInfo"
import List from "../../components/List"
import RestaurantSidebar from "../../components/RestaurantSidebar"
import Button from '../../components/Button';



function RestaurantPage() {
    const {restaurant_name} = useParams();
    const [restaurant, setRestaurant] = useState({})
    const [pageLoaded, setPageLoaded] = useState(false)
    const [catalogTitles, setCatalogTitles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:8080/restaurants/${restaurant_name.toLowerCase()}`).then((res)=> {
        setRestaurant(res.data)
        setPageLoaded(true)  
      }).catch(e=> {
        console.log(`ERROR: ${e}`);
      })

    }, [restaurant_name])

    useEffect (()=> {
      if (pageLoaded)
        saveCatalogTitles()
    }, [pageLoaded])

    const saveCatalogTitles = ()=> {
      const catTitles =[]
        restaurant.category.map((element, index)=> {
          const x = {"url": `/restaurants/${restaurant_name}#catalog-${index}`, 'title': element.title}
          catTitles.push(x)
        })
        setCatalogTitles(catTitles)
    }
    const addToCart = ()=> {
      console.log('add to cart');
    }
    const removeFromCart = ()=> {
      console.log('remove from cart');
    }
    

  return (pageLoaded&& 
    <>
        <RestaurantBanner img={restaurant.image} restTitle={restaurant.shownName} subTitle={restaurant.description}/>
        <div className={Style.hero}>
          <input className={Style.search} placeholder='חפש בתפריט'/>
          <div className={Style.info_wrapper}>
            <RestaurantInfo openingTimes={restaurant.openingHours} address={`${restaurant.address.street}, ${restaurant.address.city}`} phone={`${restaurant.phone}`}/>
          </div>
          <div className={Style.menu_container}>
            <div className={Style.menu_wrapper}>
                {restaurant.category.map((catalogItem, index) => {

                    return (<div key={index} className={Style.list_wrapper} id={`catalog-${index}`}>
                    <List items={catalogItem.dishes} listTitle={catalogItem.title} subTitle={catalogItem.subtitle}/>
                    </div>)
                })}
            </div>
            <nav className={Style.rest_nav}>
              <RestaurantSidebar items={catalogTitles} />
            </nav>
          </div>
          {cart.length > 0 && <div className={Style.end_btn}>
            <Button text="לסיום הזמנה" size="large"/>
          </div>}
        </div>
    </>
  )
}

export default RestaurantPage