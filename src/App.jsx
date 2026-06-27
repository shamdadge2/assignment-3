import { useState } from "react";

function App() {
  const [color, setColor] = useState("White");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Favorite Color Picker</h2>

      <h3>Selected Color: {color}</h3>

      <div
        style={{
          width: "250px",
          height: "150px",
          backgroundColor: color.toLowerCase(),
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {color}
      </div>

      <button onClick={() => setColor("Red")}>Red</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Yellow")}>Yellow</button>
    </div>
  );
}

export default App;