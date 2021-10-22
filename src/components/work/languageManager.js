class LanguageManager {
  static getText(language, idCode) {
    const texts = {
      dark: {
        english: "dark",
        german: "dunkel",
      },
      theme: {
        english: "Theme",
        german: "Farbthema",
      },
      light: {
        english: "Light",
        german: "hell",
      },
      language: {
        english: "Language",
        german: "Sprache",
      },
      profile: {
          english: "Profile",
          german: "Profile"
      },
      english: {
        english: "English",
        german: "English",
      },
      german: {
        english: "German",
        german: "Deutsch",
      },
      home: {
        english: "Home",
        german: "Startseite",
      },
      settings: {
        english: "Settings",
        german: "einstellungen",
      },
      welcomeToSite: {
        english: "Welcome to this site",
        german: "Willkommen auf dieser Website",
      },
      themeIsNow: {
        english: "The theme is now",
        german: "Das Farbthema ist jetzt",
      },
      languageIsNow: {
        english: "The language is now",
        german: "Die Sprache ist jetzt",
      },
    };
    if (texts.hasOwnProperty(idCode) ){
      return texts[idCode][language];
    } else {
      return "[UNKNOWN]";
    }
  }
}
export default LanguageManager;
