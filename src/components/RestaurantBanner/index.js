import React from 'react'
import Style from "./styles.module.css"

/**
 * @param {String} img img url for BG of the bunner
 * @param {String} restTitle the name of the restaurant
 * @param {String} restTitleColor the color of the restaurant's name (light / dark)
 */
const RestaurantBanner = ({img="https://picsum.photos/200", restTitle="שם המסעדה", restTitleColor="dark"}) => {

    return (
        <div className={Style.restaurant_banner} style={{"background": `url(${img}) no-repeat`, "backgroundSize": "100% 100%"}}>
            <h1 className={`${Style.rest_title} ${restTitleColor === "light" ? Style.light : Style.dark}`}>{restTitle}</h1>
        </div>
    )
}

export default RestaurantBanner;