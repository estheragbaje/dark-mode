import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const valueFromLocalStorage = localStorage.getItem(key);
    return valueFromLocalStorage
      ? JSON.parse(valueFromLocalStorage)
      : initialValue;
  });

  useEffect(() => {
    console.log("Let us see if there is something in ls like " + key);
  }, [key]);

  const setValue = value => {
    setStoredValue(value); // in state
    localStorage.setItem(key, JSON.stringify(value)); // in ls
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
