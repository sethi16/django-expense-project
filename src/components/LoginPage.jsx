import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
   const [emailagain, setEmailAgain] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const navigate = useNavigate();

// Forgot password
const handleForgotPassword = async () => {
  if (!emailagain) {
    alert("Please enter your email first");
    return;
  }

  try {
    const res = await fetch("http://localhost:8000/api/password_reset/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // change from FormData
        // "X-CSRFToken": csrfToken,          // only if you want CSRF protection
      },
      body: JSON.stringify({ email: emailagain }), // change from formData
    });
     console.log("Email being sent to reset:", emailagain);
     const data = await res.json();

   if (res.ok) {
      alert(data.message || "A reset link has been sent.");  // ← Show backend message
      setShowEmailInput(false);
      setEmailAgain("");
    } else {
      alert(data.error || data.message || "Error sending password reset email");  // ← Show backend error
    }
  } catch (err) {
    console.error("Forgot password error:", err);
    alert("Something went wrong. Try again.");
  }
};

  // Login with JWT
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password: password }),
      });

      const data = await res.json();

      if (data.access) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        navigate("/ExpenseFormed");
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Login
        </button>
      </form>

      {/* Forgot password section */}
      {!showEmailInput && (
        <button
          type="button"
          onClick={() => setShowEmailInput(true)}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#f39c12",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Forgot Password?
        </button>
      )}

      {showEmailInput && (
        <div style={{ marginTop: "10px" }}>
          <input
            type="email"
            placeholder="Enter your email"
             value={emailagain}
            onChange={(e) => setEmailAgain(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          />
          <button
            type="button"
            onClick={handleForgotPassword}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#f39c12",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Reset Link
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
