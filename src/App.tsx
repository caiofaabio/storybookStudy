import "./App.css";
import {Button} from "./components/button/Button";
import {FaBeer} from "react-icons/fa";
import {ToggleSwitch} from "./components/toggleSwitch/ToggleSwitch";
import {Loading} from "./components/loading/Loading";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="card">
        <Button label={`Count:`} icon={<FaBeer />} primary={true} />
        <ToggleSwitch onToggle={(isChecked) => console.log(isChecked)} />
        <Loading />
      </div>
    </>
  );
}

export default App;
