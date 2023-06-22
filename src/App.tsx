import { useState, useEffect } from 'react'
import './App.css'
import { CountButton } from './components/CountButton';

export function App() {
  const [count, setCount] = useState(0)
  const [specialNumber, setSpecialNumber] = useState(false);

  useEffect(() => {
    if (count === 3 || count === 7) {
      setSpecialNumber(true);
    } else {
      setSpecialNumber(false);
    }
  }, [count])

  return (
    <div className="card">
      <CountButton count={count} setCount={setCount} />
      <div className={specialNumber ? `special` : 'normal'}>{count}</div>
      {count === 7 && (
        <div>Lucky Seven!</div>
      )}
      {count === 3 && (
        <div>Now at three.</div>
      )}
      <div>
        Double count is {count * 2}
      </div>
      <div>
        Triple count is {count * 3}
      </div>
      <div>
        {specialNumber ? (
          <div>it's a SPECIAL NUMBER</div>
        ) : (
          <div>(normal number)</div>
        )}
      </div>
      <CountButton count={count} setCount={setCount} />
    </div>
  )
}