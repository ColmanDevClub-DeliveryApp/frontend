import React from 'react';
import './styles.css';
import Button from '../button/index';

/**
 * 
 * parameters: orderPrice, deliveryPrice, totalPrice
 * 
 */
const PaymentInfo = ({orderPrice, deliveryPrice, totalPrice}) => {
  return (
    <div className='PaymentInfo'>
        <div className="text-container">
            <p><span className='name'>מחיר הזמנה:</span> <span className='price'>{orderPrice}₪</span></p>
            <p><span className='name'>מחיר משלוח:</span> <span className='price'>{deliveryPrice}₪</span></p>
            <p><span className='name'>מחיר כולל:</span> <span className='price'>{totalPrice}₪</span></p>
        </div>
        <Button text="לביצוע הזמנה" type="contained" size="big" fullWidth/>
    </div>
  );
};

export default PaymentInfo;