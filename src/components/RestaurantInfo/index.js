import React from 'react';
import Style from './styles.module.css';

/**
 * 
 * parameters: address, phone, openingTimes - array of objects with day and hours expamle - [{day: "'א'-ה",hours:"08:00-23:00"},{day: "'ש", hours: "סגור"}]) 
 * 
 */

const RestaurantInfo = ({address="ראשון לציון", phone="123-456-7890", openingTimes=[{day: "'א'-ה",hours:"08:00-23:00"},{day: "'ש", hours: "סגור"}] }) => {
  return (
    <div className={Style.RestaurantInfo}>
        <p className={Style.phone}>{phone}</p>
        <p className={Style.address}> <span className={Style.address_title}>כתובת:</span> {address}</p>
        <p className={Style.openingTimes_Title}>:שעות פתיחה</p>
        {openingTimes.map(({ day, hours }) => (
          <div className={Style.openingTimes}>
              <p className={Style.hours}>{hours}</p>
              <p className={Style.day}>{day}:</p>
          </div>
          ))}
    </div>
  );
};

export default RestaurantInfo;