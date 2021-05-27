import { api } from 'js/utils/resources'

const theToken = localStorage.getItem('access_token');

export const getExpenses = () => {
  
    return fetch(api.BACKEND_EXPENSE_URL+"/expenses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + theToken,
      }
    }).then((response) => {
      if (response.status === 500) {
        return [];
      }
      return response.json();
    });
};

export const addExpense = (
 category,
 expenseType,
 amount,
 period,
 date
) => {
  let expenseObj = {
    "title": category,
    "category": category,
    "type": expenseType,
    "amount": amount,
    "frequency": period,
    "createdAt": date,
    "isDeleted": false,
    "isActive": true
  };
  return fetch(api.BACKEND_EXPENSE_URL+"/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
    body: JSON.stringify(expenseObj),
  }).then((response) => {
    if (response.ok) {
      return true;
    }
    return false;
  });
};