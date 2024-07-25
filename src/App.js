import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./Routing/Navigation";
import Layout from "./Screens/Layout";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Appointment from "./Screens/Appointment";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Appointment" element={<Appointment/>}/>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
