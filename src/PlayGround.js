import React from 'react';
import PaymentInfo from './components/payment/index';

const PlayGround = () => {
    return (
        <div className='PlayGround'>
            <PaymentInfo orderPrice="342.00" deliveryPrice="12.00" totalPrice="354.00" priceSymbol="₪"/>
        </div>
    );
};

export default PlayGround;