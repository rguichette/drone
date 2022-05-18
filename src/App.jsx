import { useState, useEffect } from "react";
import { init } from "./utils/initDroneLayer.js";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rendered");
    init();
  }, []);

  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">Hive Drones</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          libero consequatur dolor, tenetur quo vel quibusdam ex vitae voluptas
          suscipit aspernatur cupiditate animi, reiciendis nostrum corrupti sunt
          magni ipsa perspiciatis?
        </p>
        <div>
          <button>English</button>
          <button>Russian</button>
        </div>
      </div>
      <div className="pricing">
        <h2>Our Packages</h2>
        <div className="pricing-table">
          <div className="pricing_card">
            <p className="title">Basic</p>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minima in corrupti, possimus quibusdam id animi?
            </p>
            <button className="btn">But Now</button>
          </div>
          <div className="pricing_card">
            <p className="title">Standard</p>
            <p className="info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda laborum recusandae modi quisquam dolorum corporis nisi
              ullam vero.
            </p>
            <button className="btn">But Now</button>
          </div>
          <div className="pricing_card">
            <p className="title">Premium</p>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quod at dicta earum. Dolores, earum.
            </p>
            <button className="btn">But Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
