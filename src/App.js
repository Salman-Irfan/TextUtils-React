import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light"); // dark mode is enabled or disabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode is enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - Home - Dark Mode";
      // }, 1500)
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1800)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path = "/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route path = "/about" element = {<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
