"use client";

import { RestaurantCard } from "@/components";
import { fetchRestaurantList } from "../utils";
import { useState, useEffect } from "react";

const RestaurantList = () => {
  const [visible, setVisible] = useState(4);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchRestaurantList().then((response) => setItems(response));
  }, [items]);

  const showMoreItems = () => {
    if (visible > 4) {
      setVisible(4);
    } else {
      setVisible(items.length);
    }
  };

  const isDataEmpty = !Array.isArray(items) || items.length < 1 || !items;
  return (
    <div>
      <div className="container mx-auto" id="discover">
        <div className="home__text-container">
          <h3 className="font-extrabold">
            Restaurants Populaires dans Yaoundé
          </h3>
          <button onClick={showMoreItems}>
            {" "}
            {visible <= 4 ? "Voir Plus" : "Réduire"}
          </button>
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__restaurans-wrapper">
            {items?.slice(0, visible).map((restaurant) => (
              <RestaurantCard restaurant={restaurant} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl">Oups, aucun résultat</h2>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
