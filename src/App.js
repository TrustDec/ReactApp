import { useEffect, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const buttonClilck = useCallback(() => {
    console.log(Object.is("0", 1));
  }, []);
  return (
    <div>
      <button onClick={buttonClilck}>{`当前点击次数：${count}`}</button>
    </div>
  );
}
export default App;
