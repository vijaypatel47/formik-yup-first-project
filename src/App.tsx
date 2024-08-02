import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import SuccessPass from "./components/SuccessPass";

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<SuccessPass />} />
    </Routes>
  </Router>
);

export default App;