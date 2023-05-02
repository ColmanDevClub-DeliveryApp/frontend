import React from 'react';
import Style from './styles.module.css';
import Button from '../Button/index';

/**
 * 
 * parameters: orderPrice, deliveryPrice, totalPrice, priceSymbol
 * 
 */
const PaymentInfo = ({orderPrice="0.00", deliveryPrice="0.00", totalPrice="0.00", priceSymbol="₪"}) => {
  return (
    <div className={Style.PaymentInfo}>
        <div className={Style.textContainer}>
            <p className={Style.p}><span>מחיר הזמנה:</span> <span>{orderPrice}{priceSymbol}</span></p>
            <p className={Style.p}><span>מחיר משלוח:</span> <span>{deliveryPrice}{priceSymbol}</span></p>
            <p className={`${Style.p} ${Style.bold}`}><span>מחיר כולל:</span> <span>{totalPrice}{priceSymbol}</span></p>
        </div>
        <Button text="לביצוע הזמנה" type="contained" size="large" fullWidth={true}/>
    </div>
  );
};

export default PaymentInfo;