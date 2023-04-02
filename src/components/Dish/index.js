import React,{useState,useEffect} from 'react'
import "./styles.css"
import Button from '../button'

/**
 *
 * parameters: picture, title, discription, price
 */
const Dish = ({picture="picture", title="restaurant Title", discription="restaurant discription", price="price"}) => {

    return (
        <div className="dish">
            <div className="image">
                <img src={picture} alt='Dish' />
            </div>

                <div className="title">
                    <h3>{title}</h3>
                </div>

                <div className="discription">
                    <p>{discription}</p>
                </div>
            
                <div className="price">
                    <p>{price}₪</p>

            </div>
            <div className="buttons">
                <Button className="button" text="+" type="contained" size="small"/>
                <p className='numberClass'>number</p>
                <Button className="button" text="-" type="contained" size="small"/>
            </div>
        </div>
    )
}

export default Dish