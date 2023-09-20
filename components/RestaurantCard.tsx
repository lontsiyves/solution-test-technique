"use client";
import Link from "next/link";

import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

const RestaurantCard =  ({ restaurant }: any) => {
  const dayOfWeekName = new Date().toLocaleString("en-US", {
    weekday: "long",
  });
  const doc = `${restaurant?.days}/${dayOfWeekName}`.toLowerCase()
  console.log(restaurant?.days?.monday[0].isOpen);
  const restaurant_state =restaurant?.days?.monday[0].isOpen;
  /*const result = restaurant?.days?.find((obj: any) => {
    return restaurant?.days[`${doc}`]=== doc
  })*/
//  console.log(result);
  return (
    <Link
      href={{
        pathname: `/restaurants/${restaurant?.id}`,
      }}
    >
      <div>
        <div className="restaurant_card_wrapper">
          <img
            src={restaurant.profile_image.url}
            alt={restaurant?.name}
            className="restaurant_card_image"
          />
        </div>
        <div className="restaurant_body">
          <div className="restaurant_categories">
            {restaurant?.category?.name?.en
              ?.split(/[\s,&,]+/)
              ?.map(function (
                data:any
              ) {
                return <button className="button">{data}</button>;
              })}
          </div>
          <div className="restaurant_name">{restaurant?.name}</div>
          <div><span className="italic">{restaurant_state? 'Overt': 'fermé'}</span> -  {restaurant?.location?.name}</div>
          <div className="font-semibold">Prix Moyen: FCFA {restaurant?.average_price}</div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
