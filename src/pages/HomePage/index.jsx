import React, {useState, useEffect} from 'react';
import Style from './styles.module.css';
import Carousel from '../../components/Carousel';
import DB from '../../DB/index.js'
import Loader from '../../components/Loader';

const HomePage = () => {
    const [categories, setCategories] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setCategories(DB);
        setIsLoading(false);
    }, [categories]);

    return (
        <>
            <Loader isLoading={isLoading}>
            {(!isLoading) && categories.map((category, index) => {
                return (
                    <div key={index} className={Style.container}>
                        <Carousel title={category.title} subtitle={category.subtitle} restaurants={category.restaurants}/>
                    </div>
                )
            })}
            </Loader>
        </>
    )
}

export default HomePage;