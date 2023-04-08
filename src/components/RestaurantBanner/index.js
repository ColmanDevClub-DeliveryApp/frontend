import React from 'react'
import Style from "./styles.module.css"

/**
 * @param {String} img img url for BG of the bunner
 * @param {String} restTitle the name of the restaurant
 * @param {String} restTitleColor the color of the restaurant's name (light / dark)
 */
const RestaurantBanner = ({img="https://picsum.photos/1400", restTitle="Restaurant Name", subTitle="subtitle", restTitleColor="dark"}) => {

    return (
        <div className={Style.restaurant_banner} style={{"background": `url(${img}) no-repeat`, "backgroundSize": "100% 100%"}}>
            <div className={`${Style.titles_container} ${restTitleColor === "light" ? Style.light : Style.dark}`}>
                <h1 className={`${Style.rest_title}`}>{restTitle}</h1>
                {subTitle && <h3 className={Style.sub_title}>{subTitle}</h3>}
            </div>
        </div>
    )
}

export default RestaurantBanner;