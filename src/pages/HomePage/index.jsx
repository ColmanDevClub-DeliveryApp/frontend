import React, { useState, useEffect } from "react";
import Style from "./styles.module.css";
import Carousel from "../../components/Carousel";
import Loader from "../../components/Loader";
import axios from "axios";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCategories = async () => {
    const res = await axios.get(`http://localhost:8080/category/`);
    if (!res) {
      console.log("ERROR: Could not get all categories");
      return;
    }
    setCategories(res.data);
    setIsLoading(false);
    console.log(res.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading}>
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <div key={index} className={Style.container}>
                <Carousel
                  title={category.title}
                  subtitle={category.subtitle}
                  restaurants={category.restaurants}
                />
              </div>
            );
          })}
      </Loader>
    </>
  );
};

export default HomePage;
