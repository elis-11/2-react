import { useContext } from "react";
import { MainContext } from "../mainContext";


const Settings = () => {
  const { theme, setTheme, language, setLanguage, text } = useContext(MainContext);

  return (
    <div className="page pageSettings">
      <div className="row">
        {text('theme')} ({theme}):
        <button onClick={() => setTheme('light')}>{text('light')}</button>
        <button onClick={() => setTheme('dark')}>{text('dark')}</button>
      </div>
      <div className="row">
        {text('language')} ({language}):
        <button onClick={() => setLanguage('english')}>{text('english')}</button>
        <button onClick={() => setLanguage('german')}>{text('german')}</button>
      </div>
    </div>
  );
};
export default Settings;
