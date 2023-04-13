import React from "react";
import Style from "./styles.module.css";
import RestaurantCard from "../RestaurantCard";
import IconButton from "../iconButton"
import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs"

const RestaurantsCarousel = ({
  restaurants = [
    {
      image: "https://picsum.photos/200",
      name: "restaurant 1",
      description: "restaurant description",
      deliveryPrice: 0,
      deliveryTime: 0,
    },
    {
      image: "https://picsum.photos/200",
      name: "restaurant 2",
      description: "restaurant description",
      deliveryPrice: 0,
      deliveryTime: 0,
    },
    {
      image: "https://picsum.photos/200",
      name: "restaurant 3",
      description: "restaurant description",
      deliveryPrice: 0,
      deliveryTime: 0,
    },
  ],
}) => {
  return (
    <div className={Style.carouselContainer}>
        
        <IconButton icon="" size="large" overrides={{"border": "0.2rem solid black", "background": "white", "color": "black"}}>
            <BsArrowLeftShort/>
        </IconButton>
        <div className={Style.restWrapper}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
        <IconButton icon="" size="large" overrides={{"border": "0.2rem solid black", "background": "white", "color": "black"}}>
            <BsArrowRightShort/>
        </IconButton>
    </div>
  );
};

export default RestaurantsCarousel;
