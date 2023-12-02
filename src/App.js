import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Component/navbar";
import IncomePage from "./Pages/incomePage";
import ExpensePage from "./Pages/expensePage";
import SavingsPage from "./Pages/savingsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<IncomePage />} />
        <Route path="/expense" element={<ExpensePage />} />
        <Route path="/savings" element={<SavingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
