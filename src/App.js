import "./styles.css";
import { ThemeProvider } from "./contexts/themeContext";
import { MyComponent } from "./component";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <MyComponent />
      </div>
    </ThemeProvider>
  );
}
