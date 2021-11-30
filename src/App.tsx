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
            { time: "6:00:00", description: "Cocktail Hour" },
            { time: "7:00:00", description: "Rehearsal Dinner Bergins" },
            { time: "7:30:00", description: "Food is served" },
            { time: "10:00:00", description: "End of Dinner" },
          ]}
          date="March 31st, 2021"
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
          events={[
            { time: "5:00:00", description: "Ceremony" },
            { time: "5:45:00", description: "Cocktails and Canapes" },
            { time: "6:50:00", description: "Introductions" },
            { time: "7:00:00", description: "We dance" },
            { time: "7:15:00", description: "We dine" },
            { time: "7:50:00", description: "Speaches" },
            { time: "8:20:00", description: "Cut Cake" },
            { time: "8:45:00", description: "We Party" },
            { time: "11:00:00", description: "First Bus Home" },
            { time: "12:00:00", description: "Second Bus Home" },
            { time: "2:00:00", description: "Last Bus Home" },
          ]}
          date="April 1st, 2021"
        ></Schedule>
      </a.div>
}
    </div>
  );
}

export default App;
