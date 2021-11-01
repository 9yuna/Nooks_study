import React from "react";
import "./styles.css";
import useNetwork from "./useNetwork";

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
