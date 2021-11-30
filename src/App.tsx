import React, { useState } from "react";
import "./App.css";
import Schedule from "./Schedule";
import { useSpring, a } from "@react-spring/web";

function App() {
  // Flipped indicates that the day is the wedding and not the rehearsal dinner
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="App" onClick={() => setFlipped(flipped => !flipped)}>
      {!flipped && <a.div style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <Schedule
          events={[
            { time: "4:00:00", description: "Rehearsal Dinner at the pool" },
          ]}
        ></Schedule>
      </a.div>}
      {flipped && <a.div
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        <Schedule
          events={[{ time: "5:00:00", description: "Wedding Begins" }]}
        ></Schedule>
      </a.div>
}
    </div>
  );
}

export default App;
