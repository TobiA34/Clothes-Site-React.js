import { useState } from "react";
import NavbarComponent from "../NavbarComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);  
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault(); 

     if (!firstName || !lastName || !username || !password) {
      alert("All fields are required!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true); 
      setErrorMessage(null);  

       const response = await axios.post("https://fakestoreapi.com/users", {
        username,
        password,
        name: {
          firstname: firstName,
          lastname: lastName,
        },
      });

       alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Registration failed. Please try again.");
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow-lg w-80">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Register</h2>
            <p className="text-muted">Please enter your details</p>
          </div>

          {/* Show error message if any */}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

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
                onChange={(e) => setUsername(e.target.value)}
                required
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
