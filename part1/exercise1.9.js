import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({text, stats}) => {
  if (text === "Positive " ) {
    return(
      <p>{text}{stats}%</p>
    )
  }
 return(
  <p>{text}{stats}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  if (total == 0){
    return(
      <><div>
        <div>
          <h1>give feedback</h1>
        </div>
        <div>
          <Button handleClick={() => setGood(good + 1)} text="good" />
          <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
          <Button handleClick={() => setBad(bad + 1)} text="bad" />
        </div>
        <div>
          <h1>
            Statistics
          </h1>
        </div>
        <div>
        </div>
      </div><div>
          No feedback given
        </div></>
    )}
  return (
    <><div>
      <div>
        <h1>give feedback</h1>
      </div>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <h1>
          Statistics
        </h1>
      </div>
      <div>
      </div>
    </div>
    <div>
        <Statistics text="Good " stats={good} />
        <Statistics text="Neutral " stats={neutral} />
        <Statistics text="Bad " stats={bad} />
        <Statistics text="All " stats={total} />
        <Statistics text="Average " stats={(good - bad) / total} />
        <Statistics text='Positive ' stats={(good / total) * 100} />
      </div></>
  )
  }

export default App
