import { useDispatch, useSelector } from "react-redux";
import styles from "./savings.module.css";
import { useEffect } from "react";
import { fetchExpense, fetchIncome } from "../reducers/action";

export default function SavingsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpense());
    dispatch(fetchIncome());
  }, [dispatch]);
  const income = useSelector((store) => store.income);
  const expense = useSelector((store) => store.expenses);
  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = expense.reduce((acc, cur) => acc + cur.amount, 0);
  const totalSavings = totalIncome - totalExpense;

  return (
    <div className={styles.savingsPage}>
      <h1>Savings Page</h1>
      <p className={styles.savingText}>Total Savings: {totalSavings} </p>
    </div>
  );
}
