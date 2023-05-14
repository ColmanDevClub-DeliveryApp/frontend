import React, {useContext, useState} from 'react'
import Style from "./styles.module.css"
import Counter from '../Counter'
import { RestaurantContext } from '../RestaurantProvider';

/**
 * parameters: picture, title, discription, price
 */
const Dish = ({id, picture, title="כותרת מסעדה", discription="תיאור מסעדה", price=0, priceSymbol="₪"}) => {

    const [amount, setAmount] = useState(0);

    const {handlePlus, handleMinus, cart} = useContext(RestaurantContext);

    return (
        <div className={Style.dish} id={id}>
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
                        <Counter onPlus={()=>{handlePlus(id, setAmount)}} onMinus={()=>{handleMinus(id, setAmount)}} amount={amount}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dish