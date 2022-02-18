import "./New.scss";

export const New = () => {
  const handleNameChange = () => {
    const name = ["Rob", "Bob", "Elis"];
    const int = Math.floor(Math.random() * name.length);
    return name[int];
  };

  return (
    <div className="New">
      New
      <p>Hallo {handleNameChange()}!</p>
    </div>
  );
};
