import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [value, setValue] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    console.log(document.body);
  }, [value]);

  const toggleMode = () => {
    if (value === false) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return { value, toggleMode };
}

export default useDarkMode;
