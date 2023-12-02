import { useDispatch, useSelector } from "react-redux";
import styles from "./income.module.css";
import { useEffect, useState } from "react";
import { fetchIncome } from "../reducers/action";
import IncomeForm from "../Component/incomeForm";

export default function IncomePage() {
  const [showForm, handleShowForm] = useState(false);
  const dispatch = useDispatch();
  const incomeData = useSelector((store) => store.income);
  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);
  console.log(incomeData);
  return (
    <div className={styles.incomePage}>
      <div className={styles.heading}>
        <h1>Income Page</h1>
        <button
          onClick={() => {
            handleShowForm(true);
          }}
        >
          Add Income
        </button>
      </div>
      <div className={styles.table}>
        {" "}
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
          <tbody>
            {incomeData.map((income) => (
              <tr>
                <td>{income?.name}</td>
                <td>{income?.amount}</td>
                <td>{income?.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && <IncomeForm handleShowForm={handleShowForm} />}
    </div>
  );
}
