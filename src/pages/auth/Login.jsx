// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     // Call backend API here
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Credit Recovery Login</h2>

//         <form onSubmit={handleSubmit} className="login-form">
//           <input
//             type="email"
//             name="email"
//             placeholder="Company Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Login</button>
//         </form>

//         <p className="login-footer">
//           © {new Date().getFullYear()} Credit Recovery System
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import "./Login.css";
// import { useNavigate, Link } from "react-router-dom";
// import { loginUser } from "../../services/authService";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const { setUser } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const data = await loginUser({ email, password });
//       setUser(data.user);
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid login credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card" style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2 className="text-center">Company Login</h2>

//       {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter company email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" disabled={loading} style={{ width: "100%" }}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       <p className="text-center mt-1">
//         Don’t have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import "./Login.css";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const { setUser } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       // Save auth
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       setUser(res.data.user);
//       setSuccess("Login successful! Redirecting...");

//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card" style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2 className="text-center">Company Login</h2>

//       {/* ALERTS */}
//       {error && (
//         <div style={{ background: "#ffe5e5", color: "#c00", padding: "10px", borderRadius: "5px" }}>
//           {error}
//         </div>
//       )}

//       {success && (
//         <div style={{ background: "#e6fffa", color: "#065f46", padding: "10px", borderRadius: "5px" }}>
//           {success}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       <p className="text-center">
//         Don’t have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://credit-recovery-app-server.vercel.app/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user);
      setSuccess("Login successful! Redirecting…");

      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Company Login</h2>

        {/* ALERTS */}
        {error && (
          <div
            style={{
              background: "#ffe5e5",
              color: "#c00",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            style={{
              background: "#e6fffa",
              color: "#065f46",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            {success}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
