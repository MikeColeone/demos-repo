import React, { useState } from "react";

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <h2>计数器：{count}</h2>
      <button onClick={() => setCount(count + 1)}>加一</button>
      <button onClick={() => setCount(count - 1)}>减一</button>
    </div>
  );
}


