import Item from "./Item";
import EditForm from "./EditForm";
import { useState } from "react";

export default function ItemList({
  items,
  onDeleteItem,
  onToggle,
  onEditItem,
  editMode,
  setEditMode,
}) {
  const [selectedItem, setSelectedItem] = useState();
  const [placeholderItem, setPlaceholderItem] = useState("");

  const myItemStyle = {
    position: "relative",
    margin: "1em auto",
    padding: "0.5em",
    backgroundColor: "#ced4da",
    width: "5em",
    borderRadius: "5px",
    transition: "0.3s",
  };

  const myDivStyle = {
    backgroundColor: "#dee2e6",
    borderRadius: "5px",
    height: "10em",
  };

  if (editMode)
    return (
      <EditForm
        onEditItem={onEditItem}
        setEditMode={setEditMode}
        editMode={editMode}
        selectedItem={selectedItem}
        placeholderItem={placeholderItem}
      />
    );

  return (
    <div
      className="item-container"
      style={items.length === 0 ? { myDivStyle } : {}}
    >
      {items.length === 0 ? (
        <div className="empty-item" style={myItemStyle}>
          <span>No Todos</span>
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <Item
              items={items}
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggle={onToggle}
              onEditItem={onEditItem}
              editMode={editMode}
              setEditMode={setEditMode}
              setSelectedItem={setSelectedItem}
              setPlaceholderItem={setPlaceholderItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
