import { useState } from "react";
import NavbarComponent from "../NavbarComponent";
import axios from "axios";  
import { useAuth } from "../../context/AuthContext";  
import { useNavigate } from "react-router-dom";  

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuth();  

  const navigate = useNavigate();  
   const handleLogin = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submit

    // Validate that both fields are filled
    if (!username || !password) {
      alert(!username ? "Please enter a username" : "Please enter a password");
      return;
    }

    try {
      // Show loading state
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      });

      // If login is successful, store the token and user data
      login(response.data.username, response.data.id, response.data.token);

      // Store the token in localStorage
      localStorage.setItem("authToken", response.data.token);

      // Redirect to the account page
      navigate("/account");

      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow-lg w-80">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Login</h2>
            <p className="text-muted">Please enter your credentials</p>
          </div>

          <form onSubmit={handleLogin}>
              <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-2">
            <span>Don't have an account?</span>
            <a href="#" className="text-decoration-none">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
