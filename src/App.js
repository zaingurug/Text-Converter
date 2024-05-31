import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Aleart type dic varialbe
  const alert_color_dic = {
    success: "green",
    warning: "yellow",
    danger: "red",
    primary: "blue",
  };
  // Dark/Light Mode State
  const [mode, setMode] = useState("light");
  // Alert Transtion Mode State
  const [alert, setAlert] = useState(null);

  // Dark/Light Mode Toggle
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      let body = document.getElementById("html_tag");
      body.className = "dark";
    } else {
      setMode("light");
      let body = document.getElementById("html_tag");
      body.className = "light";
    }
  };

  // Alert Transtion Mode State
  const handleAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
      color: alert_color_dic[type],
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <div>
        {/* ############################################################### */}
        <div className="flex flex-col fixed z-10 w-full top-0">
          <Navbar title="Text Converter" mode={mode} handleMode={handleMode} />

          {/* ############################################################### */}
          <Alerts newalert={alert} />
        </div>

        {/* ############################################################### */}
        <div className="mx-auto w-11/12 lg:w-3/5 mt-24">
          <Routes>
            <Route exact path="/" element={<TextForm handleAlert={handleAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
