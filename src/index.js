import animals, { useAnimals } from "./data";

/* console.log(animals);

const [cat, dog] = animals;

console.log(cat);

const { name: catName, sound: catSound } = cat;

const {
  name = "Fluffy",
  feedingRequirements: { food, water }
} = cat;
console.log(name);
console.log(food);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound(); */

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour]
} = tesla;

//const {topSpeed: hondaTopSpeed} = hondaSpeedStats;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
