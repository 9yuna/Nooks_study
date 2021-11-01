import React from "react";
import "./styles.css";
import useFadeIn from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 4);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>Testing</p>
    </div>
  );
};

export default App;
