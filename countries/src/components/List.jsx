import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Button from "./Button";

function List() {
  const [countries, setCountries] = useState();
  const [smallerCountries, setSmallerCountries] = useState();
  const [inOceania, setInOceania] = useState();
  const [loading, setLoading] = useState(true);
  const [ascending, setAscending] = useState(true);
  const [smallerCountriesButton, setSmallerCountriesButton] = useState(false);
  const [oceaniaButton, setOceaniaButton] = useState(false);
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
    ascending
      ? setSortButtonName("Sort A to Z")
      : setSortButtonName("Sort Z to A");
  };

  const filterSmaller = () => {
    const lithuania = countries.filter(
      (country) => country.name === "Lithuania"
    );
    const smallerThanLT = countries.filter((country) => {
      return country.area < lithuania[0].area;
    });
    setSmallerCountries(smallerThanLT);
    setSmallerCountriesButton(!smallerCountriesButton);
  };

  const filterOceania = () => {
    const isInOceania = countries.filter((country) => {
      return country.region === "Oceania";
    });
    setInOceania(isInOceania);
    setOceaniaButton(!oceaniaButton);
  };

  const mapCountries = () => {
    if (!oceaniaButton && smallerCountriesButton) {
      return smallerCountries.map((country, index) => (
        <ListItem
          key={index}
          name={country.name}
          region={country.region}
          area={country.area}
        />
      ));
    } else if (!smallerCountriesButton && oceaniaButton) {
      return inOceania.map((country, index) => (
        <ListItem
          key={index}
          name={country.name}
          region={country.region}
          area={country.area}
        />
      ));
    } else if (smallerCountriesButton && oceaniaButton) {
      return smallerCountries
        .filter((country) => {
          return country.region === "Oceania";
        })
        .map((country, index) => (
          <ListItem
            key={index}
            name={country.name}
            region={country.region}
            area={country.area}
          />
        ));
    } else {
      return countries.map((country, index) => (
        <ListItem
          key={index}
          name={country.name}
          region={country.region}
          area={country.area}
        />
      ));
    }
  };

  if (!loading) {
    return (
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <Button text="Smaller than Lithuania" onClick={filterSmaller} className={smallerCountriesButton ? "bg-emerald-400" : "bg-emerald-700"}/>
            <Button text="Is in Oceania" onClick={filterOceania} className={oceaniaButton ? "bg-emerald-400" : "bg-emerald-700"}/>
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
