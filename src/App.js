import "./App.css";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import CounterNoRedux from "./components/CounterNoRedux";
import TodoList from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>
      <TodoList />
      <AddTodo />
      {/* <Counter/> */}
      <CounterNoRedux/>
    </div>
  );
}

export default App;
