import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Cart from "./components/Cart";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme btn  */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Cart />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
