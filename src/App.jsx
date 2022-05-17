import { useState, useEffect } from "react";
import { init } from "./utils/initDroneLayer.js";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rendered");
    init();
  }, []);

  return <div className="App"></div>;
}

export default App;
