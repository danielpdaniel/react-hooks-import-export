import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RockyMountainExports from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(RockyMountainExports.trees);
  RockyMountainExports.wildlife();

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks
