import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import ExpenseFormed from "./components/ExpenseFormed.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
//import ExpenseList from "./components/ExpenseList.jsx";
//import Dashboard from "./components/Dashboard.jsx";
// keep it commented

function App(){
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path='/LoginPage' element= {<LoginPage/>} />
      <Route path= '/ExpenseFormed' element= {<ExpenseFormed/>} />
    </Routes>
  );
}
export default App;
