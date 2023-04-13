import "./App.css";
import AddTodo from "./components/AddTodo";
import ColorPalette from "./components/ColorPalette";
import Counter from "./components/Counter";
import CounterNoRedux from "./components/CounterNoRedux";
import ShoppingCart from "./components/ShoppingCart";
import TodoList from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>
      <TodoList />
      <AddTodo />
      {/* <Counter/> */}
      {/* <CounterNoRedux/>
      <ColorPalette/> */}
      <ShoppingCart />
    </div>
  );
}

export default App;
