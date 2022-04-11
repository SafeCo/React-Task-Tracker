import React from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks , setTasks] = React.useState([
    {
      id: 1,
      text: "test1",
      day: "day1",
      reminder: true,
    },
    {
      id: 2,
      text: "test2",
      day: "day2",
      reminder: true,
    },
    {
      id: 3,
      text: "test3",
      day: "day3",
      reminder: true,
    },
    {
      id: 4,
      text: "test4",
      day: "day4",
      reminder: true,
    }
  ])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
