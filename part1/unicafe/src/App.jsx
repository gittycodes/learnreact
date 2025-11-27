import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    </>
  )
}

const Statistics = (props) => {

  if (props.total > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          <StatisticLine text="good" value={props.stats[0].value} />
          <StatisticLine text="neutral" value={props.stats[1].value} />
          <StatisticLine text="bad" value={props.stats[2].value} /> 
          <StatisticLine text="all" value={props.total} />
          <StatisticLine text="average" value={props.avg} />
          <StatisticLine text="positive" value={props.positive_percent} />
          </tbody>
        </table>
      </div> 
    )
  }
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }




const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = [
    {
      text: 'good',
      value: good,
      score: 1
    },
    {
      text: 'neutral',
      value: neutral,
      score: 0
    },
    {
      text: 'bad',
      value: bad,
      score: -1
    }
  ]


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics stats={stats} avg={(good + bad) / (good + neutral + bad)} total={good + neutral + bad} positive_percent={(good / (good + neutral + bad)) * 100} />
    </div>
  )
}

export default App