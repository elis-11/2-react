import React from "react";
import "./MyButton.scss";

const MyButton = ({children, ...props}) => {
  return (
<div className="MyButton">
    <button className="btn">
    {children}
  </button>
</div>
    )
};

export default MyButton;
