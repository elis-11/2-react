import { useContext } from "react";
import { MainContext } from "../mainContext";

const Home = () => {
  const { theme, language, text } = useContext(MainContext);
  return (
    <div className="page pageHome">
      <p>{text('welcomeToSite')}. </p>
      <hr />
      <p>{text('themeIsNow')}: {theme}</p>
      <p>{text('languageIsNow')}: {language}</p>
    </div>
  );
};
export default Home;
