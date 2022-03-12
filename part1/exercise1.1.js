const App = (props) => {

  return (
    <div>
      <Header course={props.course} />
      <Content exercises1={10} exercises2={7} exercises3={14}/>
      <Total  />
    </div>
  )
}

const Header = () => {
  const course = 'Half Stack application development'
  return(
    <div>
    <h1>{course}</h1>
    </div>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return(
    <>
      <p>
        {part1}{props.exercises1}
      </p>
      <p>
        {part2}{props.exercises2}
      </p>
      <p>
        {part3}{props.exercises3}
      </p>
    </>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return( <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  </>
  )
}
export default App
