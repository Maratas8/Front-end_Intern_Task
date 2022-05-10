import React from "react";

function ListItem({ name, region, area }) {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{region}</h3>
      <h3>{area}</h3>
    </div>
  );
}

export default ListItem;
