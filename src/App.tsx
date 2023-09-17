import { useMemo, useState } from 'react'
import { initalItems } from './utils';



function App() {
  const [count, setCount] = useState(0)
  const [items] = useState(initalItems);

  const selectedItem = useMemo((() => items.find(e => e.isSelected)), [items]);

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Selected Itmes {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  )
}

export default App
