import "../styles/barbell.css";

const Barbell = ({ platesOnBar }) => {
  return (
    <div>
      <div className="barbell"> Barbell</div>
      <div>
        {platesOnBar.map((plate) => (
          <div>{plate}</div>
        ))}
      </div>
    </div>
  );
};

export default Barbell;
