// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home key="home" />} />
              <Route exact path="/about" element={<About key="about" />} />
              <Route exact path="/login" element={<Login key="login" />} />
              <Route exact path="/signup" element={<SignUp key="signup" />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
