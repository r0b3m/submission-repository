import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral


  return (
    <div>
      <div>
      <h1>give feedback</h1>
      </div>
      <div>
      <Button handleClick={() => setGood(good +1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral +1)} text="neutral"/>
      <Button handleClick={() => setBad(bad +1)} text="bad"/>
      </div>
      <div>
        <h1>
          Statistics
        </h1>
      </div>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {(good - bad)/total}</p>
        <p>positive {(good/total) * 100}%</p>
      </div>
    </div>
  )
}

export default App
