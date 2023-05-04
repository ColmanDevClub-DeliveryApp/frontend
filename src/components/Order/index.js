import React from 'react';
import Style from './styles.module.css';
import List from '../List/index.js';
import Payment from '../payment/index.js';
import RestaurantBanner from '../RestaurantBanner/index.js';


/**
 * @param {*} Parameters arr of dishes, restaurant name, picture image.
 * @returns {*} Order page
 */
const Order = ({dishes=[], restTitle="שם המסעדה", img="https://picsum.photos/300"}) => {
        const orderPrice = dishes.reduce((acc, dish) => acc + dish.price, 0);
        let deliveryPrice = 0;
        dishes.length === 0 ? deliveryPrice = 0 : deliveryPrice = 15;
        const totalPrice = orderPrice + deliveryPrice;
    return (
        <div className={Style.container}>
            <RestaurantBanner img={img} restTitle={restTitle} />
            <hr />
            <div className={Style.dishes}>
                <List items={dishes} listTitle="סיכום הזמנה" subTitle="פריטים שנבחרו"/>
            </div>
            <div className={Style.payment}>
                <Payment orderPrice={orderPrice || "0"} deliveryPrice={deliveryPrice || "0"} totalPrice={totalPrice || "0"} priceSymbol="₪"/>
            </div>
        </div>

    )

}

export default Order;