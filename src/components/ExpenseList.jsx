  import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ExpenseList({ expenses }) {
  return (
    <ul className="list-group mt-3">
      {expenses.map(item => (
        <li key={item.id} className="list-group-item">
          {item.title} — €{item.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;    
