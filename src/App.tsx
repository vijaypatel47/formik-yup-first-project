import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PasswordReset from "./components/PasswordReset";
import NewPassword from "./components/NewPassword";
import SuccessPass from "./components/SuccessPass";
import SuccessEmail from "./components/SuccessEmail";
import PassLinkSent from "./components/PassLinkSent";
import OtpVerify from "./components/OtpVerify";
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/enter-new-pass" element={<NewPassword />} />
      <Route path="/success-password-set" element={<SuccessPass />} />
      <Route path="/success-email" element={<SuccessEmail />} />
      <Route path="/reset-link" element={<PassLinkSent />} />
      <Route path="/otp-verify" element={<OtpVerify />} />
    </Routes>
  </Router>
);

export default App;