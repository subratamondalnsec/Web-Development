import './App.css'
import Count from './counter.jsx'
import Like from './LikeButton.jsx'
import LudoBoard from './Object.jsx'
import TodoList from './Todo.jsx'
function App() {
  return (
    <>
      <h1>State in React</h1>
      <Count/>
      <Like/>
      <h1>Object in React</h1>
      <LudoBoard/>
      <TodoList/>
    </>
  )
}

export default App
