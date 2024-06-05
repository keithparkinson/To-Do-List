import { useState } from "react";

export default function EditForm({
  onEditItem,
  setEditMode,
  selectedItem,
  placeholderItem,
}) {
  const [updatedDescription, setUpdatedDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onEditItem(updatedDescription, selectedItem);
  }

  function handleClose() {
    setEditMode(false);
  }
  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholderItem}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
        <button className="save-button">save</button>
        <button className="close-button" onClick={() => handleClose()}>
          &#x274C;
        </button>
      </form>
    </div>
  );
}
