import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

function List() {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  console.log(countries);

  if (!loading) {
    return (
        <div className="">
        {countries.map((country, index) => (
          <ListItem key={index} name={country.name} region={country.region} area={country.area}/>
        ))}
      </div>
    );
  } else {
      return (
          <div>Loading...</div>
      )
  }
}

export default List;
