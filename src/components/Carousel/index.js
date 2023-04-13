import React from "react";
import Style from "./styles.module.css";
import "./carouselStyle.css";
import RestaurantCard from "../RestaurantCard";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
  subtitle = "קרוסלה - תת כותרת",
  autoPlay = false,
  interval = 3000,
}) => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [];

  restaurants.forEach((item) => {
    items.push(
      <div className={Style.card} onDragStart={handleDragStart}>
        <RestaurantCard restaurantItem={item} />
      </div>
    );
  });

  return (
    <div className={Style.carouselComponent}>
      {(title || subtitle) && (
        <div className={Style.titles}>
          {title && <h1 className={Style.title}>{title}</h1>}
          {subtitle && <h3 className={Style.subtitle}>{subtitle}</h3>}
        </div>
      )}

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 3,
            itemsFit: "contain",
          },
        }}
        infinite
        autoPlay={autoPlay}
        autoPlayInterval={interval}
        // keyboardNavigation
        disableDotsControls
        autoHeight={false}
        // disableButtonsControls
        renderNextButton={()=> {return <div className="alice-carousel__next-btn-wrapper"><ImArrowRight2/></div>}}
        renderPrevButton={()=> {return <div className="alice-carousel__prev-btn-wrapper"><ImArrowLeft2/></div>}}
      />
    </div>
  );
};

export default RestaurantsCarousel;
