import React from "react";
import Buttons from "./components/buttons";
import Timer from "./components/Timer";
import AuthButtons from "./components/AuthButtons";

const App = () => {
  return (
    <div>
      <Buttons />
      <Timer />
      <AuthButtons />
    </div>
  );
};

export default App;
