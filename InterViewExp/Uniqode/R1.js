/*
There is React machine coding question,
I have a circle in UI with Radius 200px onclick that circle 2 more circles with
half the radius of original circle appears and original circle disappears
and it continues...
*/

import React, { useState } from 'react';

const App = () => {
  const [circles, setCircles] = useState([{ id: 1, radius: 200 }]);

  const handleCircleClick = (id, x, y, radius) => {
    if (radius <= 10) return; // Stop recursion if radius is too small
    setCircles((prevCircles) =>
      prevCircles
        .filter((circle) => circle.id !== id) // Remove clicked circle
        .concat([
          // Add two smaller circles
          { id: Date.now(), radius: radius / 2 },
          { id: Date.now() + 1, radius: radius / 2 },
        ])
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {circles.map((circle) => (
        <div
          key={circle.id}
          onClick={() => handleCircleClick(circle.id, circle.radius)}
          style={{
            width: circle.radius,
            height: circle.radius,
            borderRadius: '50%',
            background: 'skyblue',
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
