import '../Course.scss';


export const Square = ({ colorValue, hexValue, darkText }) => {
  return (
    <section className="square" 
    style={{ 
        backgroundColor: colorValue,
color: darkText ? "#000" : "#fff"
    }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};
Square.defaultProps = {
  colorValue: "Empty Color Value",
};
