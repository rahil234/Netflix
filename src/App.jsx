import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
