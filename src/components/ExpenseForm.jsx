
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 import { useNavigate } from "react-router-dom";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
      const navigate = useNavigate();

 

const logoutUser = () => {
  // Remove JWT tokens
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  
  // Redirect to login page
  navigate("/loginPage");
};


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please enter both title and amount!");
      return;
    }

    onAddExpense({
      title,
      amount: +amount,
    });

    setTitle("");
    setAmount("");
  };

  return (
    <>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Expense title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          placeholder="Amount"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Add Expense</button>

    </form>
      <button
  onClick={logoutUser}
  style={{
    padding: "8px 12px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Logout
</button>
  </>
    );
}
export default ExpenseForm;

