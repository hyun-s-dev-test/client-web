import logo from "./logo.svg";
import "./App.css";
import Login from "./feature/auth/login/Login";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <Login></Login>
    </>
  );
}

export default App;
