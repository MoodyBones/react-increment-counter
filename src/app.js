import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

function Counter() {
  const [count, setCount] = useState(0)
  const paragraphArray = Array.from({ length: count })

  console.log(paragraphArray)

  return (
    <main>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <div>
        {paragraphArray.map((_click, index) => (
          <p key={index}>{index + 1} X PARAGRAPH</p>
        ))}
      </div>
    </main>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
