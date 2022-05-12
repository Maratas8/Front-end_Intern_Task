import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Button from "./Button";

function List() {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);
  const [ascending, setAscending] = useState(true);
  const [sortButtonName, setSortButtonName] = useState("Sort Z to A");

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  const togleSort = () => {
    setAscending(!ascending);
    ascending ? setSortButtonName("Sort A to Z") : setSortButtonName("Sort Z to A");
  };

  const mapCountries = () => {
    return countries.map((country, index) => (
      <ListItem
        key={index}
        name={country.name}
        region={country.region}
        area={country.area}
      />
    ));
  };

  if (!loading) {
    return (
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <Button text="Smaller than Lithuania" />
            <Button text="Is in Oceania" />
          </div>
          <div>
            <Button text={sortButtonName} onClick={togleSort} />
          </div>
        </div>
        <div className="">
          {ascending ? mapCountries() : mapCountries().reverse()}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default List;
