import Cookies from "js-cookie";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Countries from "./pages/Countries";
import Leagues from "./pages/Leagues";
import Login from "./pages/Login";

function App() {
  const key = Cookies.get("key");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/countries" element={ key !== undefined ? <Countries /> : <Login /> } />
        <Route path="/leagues/:id" element={
          key !== undefined ? <Leagues /> : <Login />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
