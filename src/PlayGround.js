import React from 'react'
import RestaurantInfo from './components/resturauntInformation'

const PlayGround = () => {
    return (
        <div>
        <RestaurantInfo address='האשל 12 ראשון לציון' phone='054-123-1231' openingTimes={[{day: "'א'-ה",hours:"12:00-23:00"},{day: "'ו", hours: "12:00-16:00"},{day : "'ש", hours:"21:00-01:00"}]}/> 
        </div>
    )
}

export default PlayGround