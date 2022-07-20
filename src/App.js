import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`update---${count}`)
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {`当前点击次数：${count}`}
      </button>
    </div>
  );
}
export default App;