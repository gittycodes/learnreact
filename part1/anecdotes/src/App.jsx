import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>
      {text}
      </button>
    </div>
  )
}

const MostVotes = ({anecdotes, votes}) => {
  const max = Math.max(...votes)
  const index = votes.indexOf(max)
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[index]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const vote_array = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(vote_array)

  const selectAnecdote = () => {
    const randomnumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomnumber)
  }

  const increase_vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>      
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button onClick={selectAnecdote} text='generate anecdote'/>
      <Button onClick={increase_vote} text='vote' />
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App