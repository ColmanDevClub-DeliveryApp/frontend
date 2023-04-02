import React from 'react'
import "./styles.css"
import Counter from '../counter'

/**
 *
 * parameters: picture, title, discription, price
 */
const Dish = ({picture="", title="כותרת מסעדה", discription="תיאור מסעדה", price="0.00", priceSymbol="₪"}) => {

    return (
        <div className="dish">
            <div className="image">
                <img src={picture} alt='Dish' />
            </div>

            <div className="body">
                <div className="text">
                    <h3 className='title'>{title}</h3>
                    <p className='discription'>{discription}</p>
                </div>
            
                <div className="PriceAndButton">
                    <div className="price">
                        <p>{price}{priceSymbol}</p>
                    </div>
                    <div className="buttons">
                        <Counter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dish