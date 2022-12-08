import { useState } from "react";
import "./Checkbox.css";

function Checkbox(props) {
  const [buttonChecked, setButtonChecked] = useState(false);
  const buttonPressed = () => {
    setButtonChecked(!buttonChecked);
    props.onDiscount(buttonChecked);
  };

  return (
    <label className="switch">
      <input
        type={"checkbox"}
        onChange={buttonPressed}
        checked={buttonChecked}
      ></input>
      <span className="slider round"></span>
    </label>
  );
}

export default Checkbox;
