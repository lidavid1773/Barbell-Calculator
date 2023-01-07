import "../styles/settings.css";

// Allow user to change weight on plates & bar along w/ units
const Settings = ({ hideSettings }) => {
  return (
    <div>
      <div className="header"> Settings Page</div>
      <button onClick={hideSettings}>Close Settings</button>
    </div>
  );
};

export default Settings;
