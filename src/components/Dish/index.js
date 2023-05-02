import React from 'react'
import Style from "./styles.module.css"
import Counter from '../Counter'

/**
 *
 * parameters: picture, title, discription, price
 */
const Dish = ({picture, title="כותרת מסעדה", discription="תיאור מסעדה", price=0, priceSymbol="₪"}) => {

    return (
        <div className={Style.dish}>
            <div className={Style.image}>
                <img src={picture} alt='Dish' />
            </div>

            <div className={Style.body}>
                <div className={Style.text}>
                    <h3 className={Style.title}>{title}</h3>
                    <p className={Style.discription}>{discription}</p>
                </div>
            
                <div className={Style.PriceAndButton}>
                    <div className={Style.price}>
                        <p>{price.toFixed(2)}{priceSymbol}</p>
                    </div>
                    <div className={Style.buttons}>
                        <Counter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dish