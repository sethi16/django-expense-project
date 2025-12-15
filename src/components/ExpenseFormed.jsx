import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseForm from "./ExpenseForm.jsx";
import ExpenseList from "./ExpenseList.jsx";

function ExpenseFormed(){
    const [expenses, setExpenses] = useState([]);
    const handlesubmit = async (expense) =>{
   
        try{
            const res = await fetch("http://localhost:8000/api/expenses/",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(expense),
            });
           const data = await res.json();
if (data.success) {
  setExpenses(prev => [...prev, data.expense]);
  console.log(data.expense);
} else {
  alert(data.message || "Failed to add expense");
}
        }
        catch(err){
            console.error("Error adding expense:", err);
            alert("Something went wrong. Try again.");
        }
    }
    return(
            <>
            <ExpenseForm onAddExpense={handlesubmit} />
            <ExpenseList expenses={expenses} />
            </>
        )
    }
export default ExpenseFormed;