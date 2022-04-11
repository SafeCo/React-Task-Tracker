import React from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks , setTasks] = React.useState([
    {
      id: 1,
      text: "test1",
      day: "test1",
      reminder: true,
    },
    {
      id: 2,
      text: "test2",
      day: "test3",
      reminder: true,
    },
    {
      id: 3,
      text: "test3",
      day: "test3",
      reminder: true,
    },
    {
      id: 4,
      text: "test4",
      day: "test4",
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
