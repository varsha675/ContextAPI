import { useTheme } from "./hooks/useTheme";

export const MyComponent = () => {
  const [isDark, setIsDark] = useTheme();

  const toggleTheme = () => {
    localStorage.setItem("isDark", !isDark);
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <button onClick={() => toggleTheme()}>Change Theme</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
