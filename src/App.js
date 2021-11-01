import React from "react";
import "./styles.css";
import useBeforeLeave from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default App;
