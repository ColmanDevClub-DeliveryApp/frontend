import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./styles.module.css";
import Button from "../Button/index";
import axios from "axios";

import { RestaurantContext } from "../../components/RestaurantProvider";

/**
 *
 * parameters: orderPrice, deliveryPrice, totalPrice, priceSymbol
 *
 */
const PaymentInfo = ({
  orderPrice = 0,
  deliveryPrice = 0,
  totalPrice = 0,
  priceSymbol = "₪",
  userId = "",
}) => {
  const { cart, restaurant } = useContext(RestaurantContext);
  const order = {
    deliveryPrice,
    dishes: cart,
    user: userId,
    restaurant: restaurant._id,
  };
  const navigate = useNavigate();

  const onEndOrder = () => {
    // axios .post("http://localhost:3001/api/orders", { restaurantId: restaurant._id, userId: userId, order: order })
    //   .then((res) => {
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    navigate("/");
  };

  return (
    <div className={Style.PaymentInfo}>
      <div className={Style.textContainer}>
        <p className={Style.p}>
          <span>מחיר הזמנה:</span>{" "}
          <span>
            {orderPrice.toFixed(2)}
            {priceSymbol}
          </span>
        </p>
        <p className={Style.p}>
          <span>מחיר משלוח:</span>{" "}
          <span>
            {deliveryPrice.toFixed(2)}
            {priceSymbol}
          </span>
        </p>
        <p className={`${Style.p} ${Style.bold}`}>
          <span>מחיר כולל:</span>{" "}
          <span>
            {totalPrice.toFixed(2)}
            {priceSymbol}
          </span>
        </p>
      </div>
      <Button
        text="לביצוע הזמנה"
        type="contained"
        size="large"
        fullWidth={true}
        onclick={onEndOrder}
      />
    </div>
  );
};

export default PaymentInfo;
