import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../reducers/action";
import styles from "./incomeForm.module.css";

export default function IncomeForm({
  handleShowForm,
  expenseForm,
  handleExpenseForm,
}) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (expenseForm) {
      dispatch(addExpense(formData));
      handleExpenseForm(false);
      console.log(formData);
    } else {
      dispatch(addIncome(formData));
      handleShowForm(false);
    }

    setFormData({ name: "", category: "", amount: "" });
  };

  // console.log(formData);
  return (
    <div className={styles.salesForm}>
      <div
        className={styles.modalOverlay}
        onClick={() => {
          expenseForm ? handleExpenseForm(false) : handleShowForm(false);
        }}
      ></div>
      <form className={styles.addModal} onSubmit={handleSubmit}>
        <div className={styles.modalText}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className={styles.modalText}>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
          />
        </div>
        <div className={styles.modalText}>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="category"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
