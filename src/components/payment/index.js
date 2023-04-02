import React from 'react';
import './styles.css';
import Button from '../button/index';

/**
 * 
 * parameters: orderPrice, deliveryPrice, totalPrice, priceSymbol
 * 
 */
const PaymentInfo = ({orderPrice="0.00", deliveryPrice="0.00", totalPrice="0.00", priceSymbol="₪"}) => {
  return (
    <div className='PaymentInfo'>
        <div className="text-container">
            <p><span>מחיר הזמנה:</span> <span>{orderPrice}{priceSymbol}</span></p>
            <p><span>מחיר משלוח:</span> <span>{deliveryPrice}{priceSymbol}</span></p>
            <p className='bold'><span>מחיר כולל:</span> <span>{totalPrice}{priceSymbol}</span></p>
        </div>
        <Button text="לביצוע הזמנה" type="contained" size="big" fullWidth/>
    </div>
  );
};

export default PaymentInfo;