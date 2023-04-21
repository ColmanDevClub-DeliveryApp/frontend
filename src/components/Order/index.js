import React from 'react';
import Style from './styles.module.css';
import List from '../List/index.js';
import Payment from '../payment/index.js';
import RestaurantBanner from '../RestaurantBanner/index.js';


/**
 * @param {*} Parameters List of dishes, restaurant name, picture image.
 * @returns {*} Order page
 */
const Order = ({list="a", restTitle="שם המסעדה", img="https://picsum.photos/300"}) => {
    const dishes = [
        {
            title: "פיצה",
            discription: "פיצה עם גבינה ופטריות",
            picture: "https://picsum.photos/200",
            price: 50
        },
        {
            title: "פיצה",
            discription: "פיצה עם גבינה ופטריות",
            picture: "https://picsum.photos/200",
            price: 50
        },
        {
            title: "פיצה",
            discription: "פיצה עם גבינה ופטריות",
            picture: "https://picsum.photos/200",
            price: 50
        }]
    return (
        <div className={Style.container}>
            <RestaurantBanner img={img} restTitle={restTitle} />
            <hr />
            <div className={Style.dishes}>
                <List items={dishes} listTitle="סיכום הזמנה" subTitle="פריטים שנבחרו"/>
            </div>
            <div className={Style.payment}>
                <Payment orderPrice="50" deliveryPrice="10" totalPrice="60" priceSymbol="₪"/>
            </div>
        </div>

    )

}

export default Order;