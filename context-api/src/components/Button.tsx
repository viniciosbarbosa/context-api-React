import { useContext } from "react";
import { Context } from "../contexts/Context";

const Button = () => {
  const { state, dispatch } = useContext(Context);

  const valueState = state.themeContext.theme;

  const handleClick = () => {
    if (valueState == "light") {
      dispatch({ type: "CHANGE_THEME", payload: "dark" });
    } else {
      dispatch({ type: "CHANGE_THEME", payload: "light" });
    }
  };

  return (
    <div>
      <h2>{valueState}</h2>

      <div
        style={{
          width: 400,
          height: 400,
          background: valueState == "dark" ? "black" : "white",
        }}
      ></div>
      <button onClick={() => handleClick()}>Mudar Cor</button>
    </div>
  );
};

export default Button;
