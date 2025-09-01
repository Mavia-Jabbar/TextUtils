import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextEnter from "./Components/TextEnter";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState({
    color: "#282828",
    backgroundColor: "white",
  });

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleButton = () => {
    if (mode.color === "#282828") {
      setmode({
        color: "white",
        backgroundColor: "#282828",
      });
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode({
        color: "#282828",
        backgroundColor: "white",
      });
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <div style={{ ...mode, height: "100vh", width: "100%" }}>
      <Router>
        <Navbar title="Textutils" modeButton={toggleButton} modeStyle={mode} />
        <Alert alert={alert} setalert={setalert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextEnter
                  title="Enter your text to analize"
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
