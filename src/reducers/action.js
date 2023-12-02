import axios from "axios";
import {
  ADD_EXPNESE_SUCCESS,
  ADD_INCOME_SUCCESS,
  FAILED_OPERATION,
  FETCH_EXPENSES_SUCCESS,
  FETCH_INCOME_SUCCESS,
  FETCH_SAVINGS_SUCCESS,
} from "../utils";

export const fetchIncome = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment19.rittikdaas.repl.co/income"
    );
    const allIncome = await response.data.allIncome;
    dispatch({ type: FETCH_INCOME_SUCCESS, payload: allIncome });
  } catch (error) {
    console.log("error while fetching income", error);
    dispatch({ type: FAILED_OPERATION });
  }
};

export const fetchExpense = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment19.rittikdaas.repl.co/expense"
    );
    const allExpense = await response.data.expenseData;
    console.log(allExpense);
    dispatch({ type: FETCH_EXPENSES_SUCCESS, payload: allExpense });
  } catch (error) {
    console.log("error while fetching expense", error);
    dispatch({ type: FAILED_OPERATION });
  }
};

export const fetchSavings = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment19.rittikdaas.repl.co/savings"
    );

    const allSavings = await response.data.allSavings;
    dispatch({ type: FETCH_SAVINGS_SUCCESS, payload: allSavings });
  } catch (error) {
    console.log("error while fetching savings data", error);
    dispatch({ type: FAILED_OPERATION });
  }
};

export const addExpense = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://assignment19.rittikdaas.repl.co/expense",
      data
    );
    const newExpense = await response.data.expenseData;
    dispatch({ type: ADD_EXPNESE_SUCCESS, payload: newExpense });
  } catch (error) {
    console.log("error while adding expense", error);
    dispatch({ type: FAILED_OPERATION });
  }
};

export const addIncome = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://assignment19.rittikdaas.repl.co/income",
      data
    );
    const newIncome = await response.data.income;
    dispatch({ type: ADD_INCOME_SUCCESS, response: newIncome });
  } catch (error) {
    console.log("error while adding income", error);
    dispatch({ type: FAILED_OPERATION });
  }
};
