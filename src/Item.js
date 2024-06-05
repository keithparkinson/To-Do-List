import { useState } from "react";

export default function Item({
  item,
  onDeleteItem,
  onToggle,
  onEditItem,
  editMode,
  setEditMode,
  setSelectedItem,
  setPlaceholderItem,
}) {
  function handleEditMode(id, description) {
    setSelectedItem((item) => id);
    setPlaceholderItem((item) => description);
    setEditMode(true);
  }
  return (
    <div className="list">
      <li>
        <div className="list-description">
          <button
            className="btn-check"
            onClick={() => onToggle(item.id)}
            style={item.complete ? { backgroundColor: "green" } : {}}
          >
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>

          <span
            className="check-item"
            style={item.complete ? { textDecoration: "line-Through" } : {}}
          >
            {item.description}
          </span>
        </div>

        <div className="list-btn">
          <button className="btn-check" onClick={() => onDeleteItem(item.id)}>
            <ion-icon name="trash"></ion-icon>
          </button>

          <button
            className="btn-check"
            onClick={() => handleEditMode(item.id, item.description)}
          >
            <ion-icon className="btn-icon" name="pencil-outline"></ion-icon>
          </button>
        </div>
      </li>
    </div>
  );
}
