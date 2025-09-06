import "./global.css";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  if (i18n.resolvedLanguage) {
    document.documentElement.lang = i18n.resolvedLanguage;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
