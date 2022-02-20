import colorNames from "colornames";
import "../Course.scss";

export const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  darkText,
  setDarkText,
}) => {
  return (
    <div className="Input">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color:</label>
        <input
          autoFocus
          type="text"
          placeholder="Add color name"
          required
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
        />
        <button type="button" onClick={(e) => setDarkText(!darkText)}>
          Toggle Text Color
        </button>
      </form>
    </div>
  );
};
