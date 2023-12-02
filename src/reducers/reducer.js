import {
  ADD_EXPNESE_SUCCESS,
  ADD_INCOME_SUCCESS,
  FAILED_OPERATION,
  FETCH_EXPENSES_SUCCESS,
  FETCH_INCOME_SUCCESS,
  FETCH_SAVINGS_SUCCESS,
} from "../utils";

const initialState = {
  income: [],
  expenses: [],
  savings: [],

  error: null,
};

export const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INCOME_SUCCESS:
      return {
        ...state,
        income: action.payload,
        error: null,
      };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.payload,
        error: null,
      };
    case FETCH_SAVINGS_SUCCESS:
      return {
        ...state,
        savings: action.payload,
        error: null,
      };
    case ADD_INCOME_SUCCESS: {
      return {
        ...state,
        income: [...state.income, action.payload],
        savings: state.savings + Number(action.payload),
      };
    }
    case ADD_EXPNESE_SUCCESS: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        savings: state.savings - Number(action.payload),
      };
    }
    case FAILED_OPERATION: {
      return { ...state, error: "Some Error Occurs during processing" };
    }

    default:
      return state;
  }
};
