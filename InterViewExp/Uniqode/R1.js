/*
There is React machine coding question,
I have a circle in UI with Radius 200px onclick that circle 2 more circles with
half the radius of original circle appears and original circle disappears
and it continues...
*/

import { useState } from 'react';

const MyComponent = () => {
  const [circles, setCircles] = useState([{ id: 1, x: 300, radius: 200 }]);

  const handleCircleClick = (id, x, radius) => {
    if (radius <= 10) return; // Stop recursion if radius is too small
    setCircles((prevCircles) =>
      prevCircles
        .filter((circle) => circle.id !== id) // Remove clicked circle
        .concat([
          // Add two smaller circles
          { id: Date.now(), x: x - radius, radius: radius / 2 },
          { id: Date.now() + 1, x: x + radius, radius: radius / 2 },
        ])
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {circles.map((circle) => (
        <div
          key={circle.id}
          onClick={() => handleCircleClick(circle.id, circle.x, circle.radius)}
          style={{
            position: 'absolute',
            left: circle.x - circle.radius,
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

export default MyComponent;
