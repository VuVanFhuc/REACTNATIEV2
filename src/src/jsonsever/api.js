import axios from 'axios';

const urlAPI = 'http://192.168.0.101:3005/expense';

export const fetchExpenses = () => {
  return axios
    .get(urlAPI)
    .then(response => {
      const data = response.data;
      return data;
    })
    .catch(error => {
      console.log('aaa');
      console.error(error);
      throw error;
    });
};

export const addExpense = expense => {
  return axios
    .post(urlAPI, expense)
    .then(response => {
      const newExpense = response.data;
      return newExpense;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

export const updateExpense = async (expenseId, updatedExpense) => {
  try {
    const updateUrl = `${urlAPI}/${expenseId}`;
    const response = await axios.put(updateUrl, updatedExpense);
    const updatedExpenseData = response.data;
    return updatedExpenseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteExpense = expenseId => {
  const deleteUrl = `${urlAPI}/${expenseId}`;
  return axios
    .delete(deleteUrl)
    .then(response => {
      const deletedExpense = response.data;
      return deletedExpense;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};
