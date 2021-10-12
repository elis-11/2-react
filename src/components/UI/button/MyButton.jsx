import React from "react";
import "./MyButton.scss";

function MyButton({children, ...props}) {
  return <button {...props} className="my-btn">{children}</button>;
}

export default MyButton;
