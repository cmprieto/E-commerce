import React from "react";
import Router from "./app/Router";
import "./app/style.css";
import Provider from "./app/CartContext";

const App = () => {
  return (
    <div>
      <Provider>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
