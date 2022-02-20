import '../Course.scss';


export const Square = ({ colorValue, hexValue }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};
Square.defaultProps = {
  colorValue: "Empty Color Value",
};
