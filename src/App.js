import logo from "./logo.svg";
import "./App.css";
import Login from "./feature/auth/login/Login";
import Register from "./feature/auth/register/Register";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
