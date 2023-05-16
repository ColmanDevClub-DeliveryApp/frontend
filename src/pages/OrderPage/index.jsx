import React, { useContext, useEffect, useState } from "react";
import Style from "./styles.module.css";
import List from "../../components/List";
import PaymentInfo from "../../components/PaymentInfo";
import RestaurantBanner from "../../components/RestaurantBanner";
import { useParams } from "react-router-dom";
import axios from "axios";

import { RestaurantContext } from "../../components/RestaurantProvider";
import Loader from "../../components/Loader";

const OrderPage = () => {
  const [dishesInOrder, setDishesInOrder] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restTitle, setResTitle] = useState("");
  const [img, setImg] = useState("");

  const [restaurant, setRestaurant] = useState({});
  const [pageLoaded, setPageLoaded] = useState(false);

  const { cart, dishes } = useContext(RestaurantContext);

  const { restaurant_name } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants/${restaurant_name.toLowerCase()}`)
      .then((res) => {
        setRestaurant(res.data);
        setPageLoaded(true);
      })
      .catch((e) => {
        console.log(`ERROR: ${e}`);
      });
  }, [restaurant_name]);

  useEffect(() => {
    if (pageLoaded) {
        setResTitle(restaurant.shownName);
        setImg(restaurant.image);
        setDeliveryPrice(restaurant.deliveryCost);
      if (cart.length > 0) {
        const dishesInOrder = cart.map((dish) => {
          const dishInOrder = dishes.find((d) => d._id === dish.id);
          return dishInOrder;
        });
        setDishesInOrder(dishesInOrder);
      }
    }
  }, [pageLoaded]);

  useEffect(() => {
    if (dishesInOrder.length > 0) {
      let calcOrderPrice = 0;
      dishesInOrder.map((dish) => {
        const dishFromCart = cart.find((d) => d.id === dish._id);
        calcOrderPrice += dishFromCart.quantity * dish.price;
      });
      setOrderPrice(calcOrderPrice);
      setTotalPrice(calcOrderPrice + deliveryPrice);
    }
  }, [dishesInOrder]);

  return (
    <Loader pageLoaded={!pageLoaded}>
      {pageLoaded && (
        <div className={Style.container}>
          <RestaurantBanner img={img} restTitle={restTitle} />
          <hr />
          <div className={Style.dishes}>
            <List
              items={dishesInOrder}
              listTitle="סיכום הזמנה"
              subTitle="פריטים שנבחרו"
              withCounter={false}
            />
          </div>
          <div className={Style.payment}>
            <PaymentInfo
              orderPrice={orderPrice || "0"}
              deliveryPrice={deliveryPrice || "0"}
              totalPrice={totalPrice || "0"}
              priceSymbol="₪"
            />
          </div>
        </div>
      )}
    </Loader>
  );
};

export default OrderPage;
