import Plate from "./Plate";
import { useState } from "react";

const redPlate = <Plate weight={55} unit={"pounds"} color={"blue"} />;
const bluePlate = <Plate weight={45} unit={"pounds"} color={"red"} />;
const yellowPlate = <Plate weight={35} unit={"pounds"} color={"yellow"} />;
const greenPlate = <Plate weight={25} unit={"pounds"} color={"green"} />;
const whitePlate = <Plate weight={10} unit={"pounds"} color={"white"} />;
const blackPlate = <Plate weight={5} unit={"pounds"} color={"black"} />;

const PlateList = () => {
  const [inventory, setInventory] = useState([
    redPlate,
    bluePlate,
    yellowPlate,
    greenPlate,
    whitePlate,
    blackPlate
  ]);
  return (
    <div>
      <div>Plate List</div>
      {inventory.map((plate) => (
        <div>{plate}</div>
      ))}
    </div>
  );
};

export default PlateList;
