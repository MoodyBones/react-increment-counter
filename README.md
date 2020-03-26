# React Increment Counter

### Ania Kubow - youtube tutorial

[https://www.youtube.com/watch?v=3ILsfTqwzpc](https://www.youtube.com/watch?v=3ILsfTqwzpc)

## React Hooks

## React Hooks

- Allow you to use state & other life cycle methods within a function based component
- they were introduced in React 16.8

`$`

    npm i react
    npm i react-dom

`index.html`

    <body>
        <div id="root"></div>
     </body>

`app.js`

    import React, { useState } from 'react'
    import ReactDOM from 'react-dom'

    function Counter() {
      return (
        <div>
          <h1>0</h1>
          <button>Increment by one</button>
        </div>
      )
    }

    ReactDOM.render(<Counter />, document.getElementById('root'))

# State in React is an object that represents the part of the App that can change.

Think of it like the components memory!

e.g.

    const [ state, setState ] useState(0)

`app.js`

    function Counter() {
      const [count, setCount] = useState(0)

      return (
        <div>
          <h1>0</h1>
    			<button onClick={() => setCount(count + 1)}>Increment by one</button>
    		</div>
      )
    }

- what we are doing here is passing through the initial state, on the first render
- so that techinally count and initial state are the same,
- in this case it's zero,
- `setCount` will be out way of setting the state (the count)
- once an event happens in our code,
- in this case it will be when the button is clicked

`<button onClick={() => setCount(count + 1)}>Increment by one</button>`

- onClick is an inbuilt function

then change 0 to `{count}`

COMPLETED

    import React, { useState } from 'react'
    import ReactDOM from 'react-dom'

    function Counter() {
      const [count, setCount] = useState(0)

      return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment by one</button>
        </div>
      )
    }

    ReactDOM.render(<Counter />, document.getElementById('root'))

## BONUS

- using map & array built-in functions
- add a paragraph line every time we click the button
- we create an array from the length of the count

- using `array.from` is better than using length
- we need to figure out how many times array has been incremented,
- and create a paragraph each time is has been

  const paragraphArray = Array.from({ length: count })

- each time the button is clicked, the paragraph array will increase by one more element

- now we have our array we need map to map it out onto our paragraphs, based on the length of the array
-


    paragraphArray.map((_click, index) => (
    	<p key={index}>{index + 1} X PARAGRAPH</p>
    ))}

Very cool tutorial!

Many hanks [Ania Kubow](https://twitter.com/ania_kubow)
