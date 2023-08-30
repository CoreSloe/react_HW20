import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route as R,
} from "react-router-dom"; // Оновлено імпорти

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register" className="Register">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Оновлений Routes */}
        <Routes>
          <R path="/register" element={<RegistrationForm />} />
          <R path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
