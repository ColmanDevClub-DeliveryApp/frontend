import React, { useContext, useEffect, useState } from "react";
import Style from "./styles.module.css";
import List from "../../components/List";
import PaymentInfo from "../../components/PaymentInfo";
import RestaurantBanner from "../../components/RestaurantBanner";

import { RestaurantContext } from "../../components/RestaurantProvider";

const OrderPage = () => {
  const [dishesInOrder, setDishesInOrder] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restTitle, setResTitle] = useState("");
  const [img, setImg] = useState("");

  const { cart, dishes, restaurant} = useContext(RestaurantContext);

  useEffect(() => {
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
    
  }, []);

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
     (
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
              orderPrice={orderPrice || 0}
              deliveryPrice={deliveryPrice || 0}
              totalPrice={totalPrice || 0}
              priceSymbol="₪"
            />
          </div>
        </div>
      )
  );
};

export default OrderPage;
