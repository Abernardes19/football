import Cookies from "js-cookie";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AllTeams from "./pages/AllTeams";
import Countries from "./pages/Countries";
import Leagues from "./pages/Leagues";
import Login from "./pages/Login";
import Team from "./pages/Team";

function App() {
  const key = Cookies.get("key");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/countries" element={ key !== undefined ? <Countries /> : <Login /> } />
        <Route path="/leagues/:country" element={
          key !== undefined ? <Leagues /> : <Login />
        } />
        <Route path="/teams/:league/:season" element={
          key !== undefined ? <AllTeams /> : <Login />
        } />
        <Route path="/statistic/:team/:league/:season" element={
          key !== undefined ? <Team /> : <Login />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
