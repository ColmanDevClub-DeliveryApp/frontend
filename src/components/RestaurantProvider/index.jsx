import React, { createContext } from "react";
import { useState } from "react";


const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const handlePlus = (dishId, setAmountFunc) => {
        if(cart.some(dish => dish.id === dishId)){
            const dish = cart.find(dish => dish.id === dishId)
            dish.quantity = dish.quantity + 1
            setCart([...cart])
            setAmountFunc(dish.quantity)
        }else {
            setCart([...cart, {id: dishId, quantity: 1}])
            setAmountFunc(1)
        }
        console.log(cart);
    }

    const handleMinus = (dishId, setAmountFunc) => {
        if(cart.some(dish => dish.id === dishId)){
            const dish = cart.find(dish => dish.id === dishId)
            dish.quantity = dish.quantity - 1
            setAmountFunc(dish.quantity)
            if(dish.quantity === 0){
                const newCart = cart.filter(dish => dish.id !== dishId)
                setCart([...newCart])
                setAmountFunc(0)
            }else {
                setCart([...cart])
            }
        }
        console.log(cart);
    }

    const value = {handlePlus, handleMinus, cart}
    return (
    <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>
  );
};

export { RestaurantProvider, RestaurantContext };