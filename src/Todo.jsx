import { useState } from "react";

export default function Todo() {
  const [isVisible, setIsVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
      setIsVisible(false);
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText("");
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <i
          onClick={handleClick}
          className="fa-solid fa-plus"
          style={{ cursor: "pointer", marginRight: "10px" }}
        ></i>

        {isVisible && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <button onClick={handleAddTodo}>Add todo</button>
          </div>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
              style={{ marginRight: "10px" }}
            />
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleEditTodo(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
