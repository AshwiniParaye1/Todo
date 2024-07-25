import { useState } from "react";

export default function Todo() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <i
        onClick={handleClick}
        className="fa-solid fa-plus"
        style={{ cursor: "pointer", marginRight: "10px" }}
      ></i>

      {isVisible && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="text" style={{ marginRight: "10px" }} />
          <button>Add todo</button>
        </div>
      )}
    </div>
  );
}
