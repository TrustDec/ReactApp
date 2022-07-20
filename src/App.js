import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(Object.is("0", 1));
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {`当前点击次数：${count}`}
      </button>
    </div>
  );
}
export default App;
