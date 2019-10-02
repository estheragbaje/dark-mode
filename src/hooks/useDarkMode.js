function useDarkMode() {
  const [value, setValue] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);

  const toggleMode = () => {
    if (value === false) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return { value, setValue, toggleMode };
}

export default useDarkMode;
