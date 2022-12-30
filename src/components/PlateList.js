import Plate from "./Plate";
import { useState } from "react";
import "../styles/plateList.css";

const redPlate = <Plate weight={55} unit={"pounds"} color={"blue"} />;
const bluePlate = <Plate weight={45} unit={"pounds"} color={"red"} />;
const yellowPlate = <Plate weight={35} unit={"pounds"} color={"yellow"} />;
const greenPlate = <Plate weight={25} unit={"pounds"} color={"green"} />;
const whitePlate = <Plate weight={10} unit={"pounds"} color={"white"} />;
const blackPlate = <Plate weight={5} unit={"pounds"} color={"black"} />;

const PlateList = ({ addPlate }) => {
  const [inventory, setInventory] = useState([
    redPlate,
    bluePlate,
    yellowPlate,
    greenPlate,
    whitePlate,
    blackPlate,
  ]);

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "1%", marginBottom: "1%" }}>
        Plate List
      </div>
      <div className="inventory">
        {inventory.map((plate) => (
          <button onClick={() => addPlate(plate)}>{plate}</button>
        ))}
      </div>
    </div>
  );
};

export default PlateList;
