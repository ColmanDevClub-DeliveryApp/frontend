import React, { createContext } from "react";
import { useState } from "react";


const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const handlePlus = (dishId) => {
        if(cart.some(dish => dish.id === dishId)){
            const dish = cart.find(dish => dish.id === dishId)
            dish.quantity = dish.quantity + 1
            setCart([...cart])
        }else {
            setCart([...cart, {id: dishId, quantity: 1}])
        }
        console.log(cart);
    }

    const handleMinus = (dishId) => {
        if(cart.some(dish => dish.id === dishId)){
            const dish = cart.find(dish => dish.id === dishId)
            dish.quantity = dish.quantity - 1
            if(dish.quantity === 0){
                const newCart = cart.filter(dish => dish.id !== dishId)
                setCart([...newCart])
            }else {
                setCart([...cart])
            }
        }
    }

    const value = {handlePlus, handleMinus, cart}
    return (
    <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>
  );
};

export { RestaurantProvider, RestaurantContext };