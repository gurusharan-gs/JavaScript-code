import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAdd = () => {
    if (count < 20) setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDec}>DEC</button>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default Count;
