import { createContext, useState } from "react";
import "./App.css";
import Homepage from "./pages/homepage";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  console.log(theme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className={`App ${theme ? 'addToggleClass' : ''}`}>
        <Homepage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
