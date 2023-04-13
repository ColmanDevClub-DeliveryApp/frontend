import React from "react";
import Style from "./styles.module.css";
import RestaurantCard from "../RestaurantCard";
import IconButton from "../iconButton";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

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
  title = "קרוסלה - כותרת",
  subtitle= "קרוסלה - תת כותרת",
  showBtns=true
}) => {
  return (
    <div className={Style.carouselComponent}>
        {(title || subtitle) && <div className={Style.titles}>
            {title && <h1 className={Style.title}>{title}</h1>}
            {subtitle && <h3 className={Style.subtitle}>{subtitle}</h3>}
        </div>}
      <div className={Style.carouselContainer}>
        {showBtns && <IconButton
          icon=""
          size="large"
          overrides={{
            border: "0.2rem solid black",
            background: "white",
            color: "black",
          }}
        >
          <BsArrowLeftShort />
        </IconButton>}
        
        <div className={Style.carouselView}>
            <div className={Style.cardsContainer}>
                <div className={Style.card}><RestaurantCard /></div>
                <div className={Style.card}><RestaurantCard /></div>
                <div className={Style.card}><RestaurantCard /></div>
                <div className={Style.card}><RestaurantCard /></div>
            </div>
        </div>

        {showBtns && <IconButton
          icon=""
          size="large"
          overrides={{
            border: "0.2rem solid black",
            background: "white",
            color: "black",
          }}
        >
          <BsArrowRightShort />
        </IconButton>}
      </div>
    </div>
  );
};

export default RestaurantsCarousel;
