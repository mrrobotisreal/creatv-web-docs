import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, initializeTheme } from "./hooks/useTheme";
import "./index.css";

initializeTheme();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
