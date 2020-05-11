import React from "react";
import "./App.css";
import HooksCounter2 from "./component/useState/HooksCounter2";
import HooksObject from "./component/useState/HooksObject";
import HooksArrays from "./component/useState/HooksArrays";

function App() {
  return (
    <div className='App'>
      <HooksArrays />
      {/* <HooksObject /> */}
      {/* <HooksCounter2 /> */}
    </div>
  );
}

export default App;
