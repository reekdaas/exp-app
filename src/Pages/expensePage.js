import { useDispatch, useSelector } from "react-redux";
import styles from "./expense.module.css";
import { useEffect, useState } from "react";
import { fetchExpense } from "../reducers/action";
import IncomeForm from "../Component/incomeForm";

export default function ExpensePage() {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const dispatch = useDispatch();
  const expenseData = useSelector((store) => store.expenses);

  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);
  console.log(expenseData);

  return (
    <div className={styles.expensePage}>
      <div className={styles.heading}>
        {" "}
        <h1>Expense Page</h1>
        <button
          onClick={() => {
            setShowExpenseForm(true);
          }}
        >
          Add Expense
        </button>
      </div>
      <div className={styles.expenseTable}>
        {" "}
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
          <tbody>
            {expenseData.map((expense) => (
              <tr key={expense._id}>
                <td>{expense?.name}</td>
                <td>{expense?.amount}</td>
                <td>{expense?.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showExpenseForm && (
        <IncomeForm
          expenseForm={showExpenseForm}
          handleExpenseForm={setShowExpenseForm}
        />
      )}
    </div>
  );
}
