import React from "react";
import Dish from "../Dish";
import Style from "./styles.module.css";

/**
 *
 * @param {*} items - array of objects
 * @param {*} listTitle - String
 * @param {*} subTitle - String
 */
const List = ({ items, listTitle, subTitle, withCounter=true }) => {
  console.log(`FROM LIST: withCoutner: ${withCounter}`);
  return (
    <div className={Style.list}>
      {(listTitle || subTitle) && (
        <div className={Style.titles}>
          {listTitle && <h2 className={Style.list_title}>{listTitle}</h2>}
          {subTitle && <h3 className={Style.list_sub_title}>{subTitle}</h3>}
        </div>
      )}
      <ul className={Style.ul}>
        {items.map((item, index) => {
          return (
            <>
              <li className={Style.list_item} key={index}>
                <Dish
                  id={item._id}
                  title={item.name}
                  discription={item.description}
                  picture={item.image}
                  price={item.price}
                  withCounter={withCounter}
                />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
