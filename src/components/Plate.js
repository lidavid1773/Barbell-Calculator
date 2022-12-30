import "../styles/plate.css";

const Plate = ({ weight, unit, color }) => {
  return (
    <div>
      I am a {weight} {unit} plate colored {color}
    </div>
  );
};

export default Plate;
