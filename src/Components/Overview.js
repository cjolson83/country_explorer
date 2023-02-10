import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h1>{currentDisplay.name.common}</h1>
      <h1>{currentDisplay.flag}</h1>
      <h2>{currentDisplay.name.official}</h2>
      <br></br>
      <table className="overview table">
        <tr>
          <td>Continent(s):</td>
          <td>
            {currentDisplay.continents.map((e) => (
              <td>{e}</td>
            ))}
          </td>
        </tr>
        <tr>
          <td>Capital:</td>
          <td>
            {currentDisplay.capital.map((e) => (
              <td>{e}</td>
            ))}
          </td>
        </tr>
        <tr>
          <td>Population:</td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Countries Bordered:</td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}, `;
                  }
                })
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Languages Spoken:</td>
          <td>
            {Object.values(currentDisplay.languages)
              ? Object.values(currentDisplay.languages).map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}, `;
                  }
                })
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Member of UN:</td>
          <td>{currentDisplay.unMember ? "True" : "False"}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
