import React from 'react'
import "./styles.css"
import Counter from '../counter'

/**
 *
 * parameters: picture, title, discription, price
 */
const Dish = ({picture="", title="restaurant Title", discription="restaurant discription", price="price"}) => {

    return (
        <div className="dish">
            <div className="image">
                <img src={picture} alt='Dish' />
            </div>

            <div className="body">
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
                    <Counter />
                </div>
            </div>
        </div>
    )
}

export default Dish