import React, { useState } from "react";
import "./App.css";
import Schedule from "./Schedule";
import { useSpring, a } from "@react-spring/web";

function App() {
  // Flipped indicates that the day is the wedding and not the rehearsal dinner
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="App" onClick={() => setFlipped(flipped => !flipped)}>
      {!flipped && <a.div style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <Schedule
          events={[
            { time: "6:00", description: "Cocktail Hour" },
            { time: "7:00", description: "Rehearsal Dinner" },
            { time: "7:30", description: "Food is served" },
            { time: "10:00", description: "End of Dinner" },
          ]}
          date="March 31st, 2021"
        ></Schedule>

        <div style={{marginTop: "3em", textAlign: "center", width: "100%", color: "grey", bottom:0}}>
          If you need any help please contact: <a href="tel:3014488021">301-448-8021</a>
        </div>
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
            { time: "5:00", description: "Ceremony" },
            { time: "5:45", description: "Cocktails and Canapes" },
            { time: "6:50", description: "Introductions" },
            { time: "7:00", description: "We dance" },
            { time: "7:15", description: "We dine" },
            { time: "7:50", description: "We speak" },
            { time: "8:20", description: "We cut cake" },
            { time: "8:45", description: "We party" },
            { time: "11:00", description: "First Bus Home" },
            { time: "12:00", description: "Second Bus Home" },
            { time: "2:00", description: "Last Bus Home" },
          ]}
          date="April 1st, 2021"
        ></Schedule>
        <div style={{marginTop: "3em", textAlign: "center", width: "100%", color: "grey", bottom:0}}>
          If you need any help please contact: <a href="tel:3014488021">301-448-8021</a>
        </div>
      </a.div>
}
    </div>
  );
}

export default App;
