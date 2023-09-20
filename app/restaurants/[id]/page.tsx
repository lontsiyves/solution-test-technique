import React from "react";
import { fetchRestaurantById } from "../../../utils";
import { Metadata } from "next";

export const metadata = {
    title: `About`,
};
export default async function RestaurantDetail({
    params,
}: {
    params: { id: string };
}) {
    const data = await fetchRestaurantById(params.id);
    return (
        <div className="nemu">
            <div className="hero-text">
                <h1>{data?.name}</h1>
                <p>{data?.location.name}</p>
            </div>
        </div>
    );
}
