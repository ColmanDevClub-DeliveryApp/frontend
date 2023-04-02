import React from 'react';
import './styles.css';

/**
 * 
 * parameters: address, phone, openingTimes - array of objects with day and hours expamle - [{day: "'א'-ה",hours:"08:00-23:00"},{day: "'ש", hours: "סגור"}]) 
 * 
 */
const RestaurantInfo = ({address="ראשון לציון", phone="123-456-7890", openingTimes=[{day: "'א'-ה",hours:"08:00-23:00"},{day: "'ש", hours: "סגור"}] }) => {
  return (
    <div className='RestaurantInfo'>
        <p className='phone'>{phone}</p>
        <p className='address'> <span className="address-title">כתובת:</span> {address}</p>
        <p className='openingTimes-Title'>:שעות פתיחה</p>
        {openingTimes.map(({ day, hours }) => (
          <div className='openingTimes'>
              <p className='hours'>{hours}</p>
              <p className='day'>:{day}</p>
          </div>
          ))}
    </div>
  );
};

export default RestaurantInfo;