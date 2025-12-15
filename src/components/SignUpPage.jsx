import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function SignUpPage(){
  /*const [username, setUsername] = useState("");*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();


    const handleSignUp = async (e) =>{
        e.preventDefault();
       
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

   console.log(res.ok); // false if 400/500
   console.log(res.status); // 400 or 500

      console.log("Raw response:", res);

      const data = await res.json();

      if (data.success) {
        alert("Registration successful! Please login.");
        navigate("/LoginPage"); // redirect to login page
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Already have an account? <a href="/loginPage">Login here</a>
      </p>
    </div>
  );
}

export default SignUpPage;