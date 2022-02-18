import { FaPlus } from "react-icons/fa";
import "./Todos.scss";

export const AddItem = () => {
  return (
    <form className="Add">
      <div className="container">
        <label htmlFor="addItem">Ad Item</label>
        <input
          autoFocus
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
      </div>
    </form>
  );
};
