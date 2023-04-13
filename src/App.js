import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
