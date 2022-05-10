import React from "react";

function ListItem({ name, region, area }) {
  return (
    <div className="bg-lime-200 m-2 p-2">
      <h3>Name: {name}</h3>
      <h3>Region: {region}</h3>
      <h3>Area: {area} km<sup>2</sup></h3>
    </div>
  );
}

export default ListItem;
