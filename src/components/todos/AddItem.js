import { FaPlus } from "react-icons/fa";
import "./Todos.scss";

export const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="Add" onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="addItem">Add Item</label>
        <input
          autoFocus
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
      </div>
    </form>
  );
};
