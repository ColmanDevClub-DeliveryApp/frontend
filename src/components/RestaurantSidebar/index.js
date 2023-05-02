import React from 'react'
import Style from './styles.module.css'

const RestaurantSidebar = ({items}) => {
  return (
    <div className={Style.sidebar}>
      <ul className={Style.ul}>
        {items.map((item, index) => {
            return (
                <li className={Style.li} key={index}>
                    <a className={Style.a} href={item.url}>{item.title}</a>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default RestaurantSidebar
