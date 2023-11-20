import axios from "axios";

export const fetchIncome = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment19.rittikdaas.repl.co/income"
    );
    const allIncome = await response.data.allIncome;
    dispatch({ type: "FETCH_INCOME_SUCCESS", payload: allIncome });
  } catch (error) {
    console.log("error while fetching income", error);
    dispatch({ type: "FETCH_INCOME_FAILURE" });
  }
};
