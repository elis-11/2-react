import React from "react";
import "./Settings.scss";

export const Settings = () => {
  // !1 random name 
  const handleChangeName=() => {
    const names =['Bob', 'John', 'Rob']
    const int =Math.floor(Math.random() * names.length)
    return names[int]
  }
    // const int= Math.floor(Math.random() * names.length)
  return (
    <div className="Settings content">
      <h2>Settings</h2>
      <p>Page </p>
      <p>
        Lorem ipsum dolor distinctio!
      </p>
      <p>Hello {handleChangeName()}!</p>  {/* !1 random name  */}
    </div>
  );
};

// export default Settings;
