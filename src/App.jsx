import "./App.css";
import Todo from "./Todo";
import todoList from "../public/icons8-notepad-48.png";

function App() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={todoList}
          alt="Todo List Icon"
          style={{ marginLeft: "10px", height: "50px" }}
        />
        <h1>To-Do App</h1>
      </div>
      <Todo />
    </>
  );
}

export default App;
