import React from "react";
import Style from "./styles.module.css";
import {RiMotorbikeFill} from 'react-icons/ri'

const RestaurantCard = ({
  restaurantItem = {
    image: "https://picsum.photos/200",
    name: "restaurant name",
    description: "restaurant description",
    deliveryPrice: 0,
    deliveryTime: 0,
  },
}) => {
  return (
    <div className={Style.RestaurantCard}>
      <div className={Style.imgContainer}>
        <img
          className={Style.restImg}
          src={restaurantItem.image}
          alt={"Restaurant Image"}
        />
      </div>

      <div className={Style.text}>
        <h3 className={Style.restName}>{restaurantItem.name}</h3>
        <p className={Style.restDesc}>{restaurantItem.description}</p>
      </div>
      <hr />
      <div className={Style.deliveryDetails}>
        <p className={Style.deliveryDetails__left}>
            <RiMotorbikeFill/>
          <span className={Style.price}>{restaurantItem.deliveryPrice.toFixed(2)}₪</span>
        </p>
        <p className={Style.deliveryDetails__right}>{restaurantItem.deliveryTime}min</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
