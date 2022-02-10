import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Work.scss";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import { MainContext } from "./mainContext";
import LanguageManager from "./languageManager";

export const Work = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  const text = (idCode) => {
    return LanguageManager.getText(language, idCode);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.style = "background: #333; color: #fff;";
    } else {
      document.body.style = "background: #fff; color: black;";
    }
  }, [theme]);

  return (
    <div className="Work">
      <MainContext.Provider
        value={{ theme, setTheme, language, setLanguage, text }}
      >
        <nav>
          <ul>
            <li>
              <Link
                to=""
                // className={(navData) => (navData.isActive ? "active" : "none")}
              >
                {text("home")}
              </Link>
            </li>

            <li>
              <Link
                // className={(navData) => (navData.isActive ? "active" : "none")}
                to="Settings"
              >
                {text("settings")}
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Routes>
      </MainContext.Provider>
    </div>
  );
};

// export default Work;
