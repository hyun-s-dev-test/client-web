import logo from "./logo.svg";
import "./App.css";
import Login from "./feature/auth/login/Login";
import Register from "./feature/auth/register/Register";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
// import FindPassword from "./feature/auth/find/FindPassword";
import FindPw from "./feature/auth/find/FindPw";
import FindId from "./feature/auth/find/FindId";
import UserInfo from "./feature/auth/userInfo/UserInfo";
import UserInfoUpdate from "./feature/auth/userInfo/UserInfoUpdate";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register"></Route>
        <Route element={<FindPw />} path="/find/password"></Route>
        <Route element={<FindId />} path="/find/id"></Route>
        <Route element={<UserInfo />} path="/user"></Route>
        <Route element={<UserInfoUpdate />} path="/user/update"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
