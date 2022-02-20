import colorNames from "colornames";
import '../Course.scss';


export const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
      />
    </form>
  );
};
