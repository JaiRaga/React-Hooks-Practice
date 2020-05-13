import React from "react";
import "./App.css";
import HooksCounter2 from "./component/useState/HooksCounter2";
import HooksObject from "./component/useState/HooksObject";
import HooksArrays from "./component/useState/HooksArrays";
import Effect from "./component/classEquiv/Effect";
import EffectsIntro from "./component/useEffect/EffectsIntro";

function App() {
  return (
    <div className='App'>
      <Effect />
      <EffectsIntro />
      {/* <HooksArrays /> */}
      {/* <HooksObject /> */}
      {/* <HooksCounter2 /> */}
    </div>
  );
}

export default App;
