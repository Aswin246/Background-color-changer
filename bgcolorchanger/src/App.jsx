import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  function changeColor() {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("purple")}>Purple</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("white")}>Default</button>
        <button className="apply-button" onClick={changeColor}>
          Apply Color
        </button>
      </div>
    </>
  );
}

export default App;
