import "../styles/settings.css";

const Settings = ({ hideSettings }) => {
  return (
    <div>
      <div className="header"> Settings Page</div>
      <button onClick={hideSettings}>Close Settings</button>
    </div>
  );
};

export default Settings;
