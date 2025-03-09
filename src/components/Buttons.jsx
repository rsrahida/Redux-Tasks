import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../redux/actions.js";

const Buttons = () => {
  const colors = useSelector((store) => store.colors.color);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: colors, width: "500px", height: "500px" }}>
      <button onClick={() => dispatch(setColor("red"))}>Qırmızı</button>
      <button onClick={() => dispatch(setColor("green"))}>Yaşıl</button>
      <button onClick={() => dispatch(setColor("blue"))}>Mavi</button>
    </div>
  );
};

export default Buttons;
