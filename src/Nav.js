import { useState } from "react";

export default function Nav({ onAddItem, itemLength }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      complete: false,
      description,
      id: Date.now(),
    };

    onAddItem(newItem);

    setDescription("");
  }

  return (
    <nav className="nav">
      <div className="nav-btn">
        <form onSubmit={handleSubmit}>
          <button className="btn">Add Task</button>
          <input
            type="text"
            className="text-box"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>

        <label>Sort By: </label>
        <select className="drop-list">
          <option>Completed</option>
          <option>Incompleted</option>
        </select>
      </div>

      <div className="nav-stat">
        <span> {itemLength} tasks</span>
      </div>
    </nav>
  );
}
