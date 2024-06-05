import { useState } from "react";
import Header from "./Header";
import ItemList from "./ItemList";
import Nav from "./Nav";
// import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);
  const [editMode, setEditMode] = useState(false);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleEditItem(updatedDescription, id) {
    setEditMode(false);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, description: updatedDescription } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Nav onAddItem={handleAddItem} itemLength={items.length} />
      <ItemList
        items={items}
        onDeleteItem={handleDelete}
        onToggle={handleToggle}
        onEditItem={handleEditItem}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </div>
  );
}
