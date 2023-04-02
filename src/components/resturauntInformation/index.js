import React from 'react';
import './styles.css';

/**
 * 
 * parameters: address, phone, openingTimes - array of objects with day and hours) 
 * 
 */
const RestaurantInfo = ({address, phone, openingTimes }) => {

  return (
    <div className='RestaurantInfo'>
        <p>{phone}</p>
        <p> כתובת: {address}</p>
        <p className='openingTimes'>:שעות פתיחה</p>
        <table>
        {openingTimes.map(({ day, hours }) => (
            <tr key={day}>
              <td>{hours}</td>
              <td>{day}</td>
            </tr>
          ))}
        </table>
    </div>
  );
};

export default RestaurantInfo;