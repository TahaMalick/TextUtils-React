//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route,Routes, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textCol, setTextCol] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextCol("light");
      document.body.style.backgroundColor = "#0c3b65";
      showAlert("Dark mode emabled", "success");
      document.title = "TextUtils - Home";
      // setInterval(() => {
      //   document.title ='TextUtils - dark';
      // }, 3000);
    } else {
      setMode("light");
      setTextCol("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      // setInterval(() => {
      //   document.title ='TextUtils - light';
      // }, 1500);
    }
  };
  return (
    <>
  <Router>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        textCol={textCol}
      />
      <Alert alert={alert} />
   
      <div className="container">
       
      <Routes>
          <Route exact path="/" element={<TextForm
              heading="Enter the text to analyze"
              showAlert={showAlert}
              mode={mode}
            />}>
            
          </Route>
<p>sfsdf</p>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          </Routes>

      </div>
 </Router>
    </>
  );
}

export default App;
