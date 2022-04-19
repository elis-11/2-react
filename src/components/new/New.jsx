import "./New.scss";

export const New = () => {
  const changeName = () => {
    const name = ["Ralf", "Bob","Luis", "Elis"];
    const int = Math.floor(Math.random() * name.length);
    return name[int];
  };

  return (
    <div className="New">
      New
      <p>Hallo {changeName()}!</p>
    </div>
  );
};
