import Barbell from "./components/Barbell";
import PlateList from "./components/PlateList";
import { useState } from "react";
import "./styles/app.css";
import Settings from "./components/Settings";

function App() {
  const [platesOnBar, setPlatesOnBar] = useState([]);
  const [totalWeight, setTotalWeight] = useState(45);
  const [displaySettings, setDisplaySettings] = useState(false);

  const addPlate = (plate) => {
    setPlatesOnBar([...platesOnBar, plate]);
    setTotalWeight(totalWeight + plate.props.weight * 2);
  };

  return (
    <div>
      {displaySettings ? (
        <Settings hideSettings={() => setDisplaySettings(false)} />
      ) : (
        <div>
          <div className="weightDisplay">
            Weight Loaded: {totalWeight} pounds
          </div>
          <Barbell platesOnBar={platesOnBar} />
          <PlateList addPlate={addPlate} />
          <button onClick={() => setDisplaySettings(true)}>Settings</button>
        </div>
      )}
    </div>
  );
}

export default App;
