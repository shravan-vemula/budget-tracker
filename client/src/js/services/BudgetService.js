import { api } from "js/utils/resources";


const theToken = localStorage.getItem("access_token");
let url = api.BACKEND_URL + "/budgets";
let budgetObj = null;

export const getBudgets = () =>  {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
  }).then((response) => {
    if (response.status === 500) {
      return [];
    } 
    return response.json();  
  });
};

export const updateBudget = (
  budgetsOfSelectedMonthAndCategory,
  budgetValue,
  frequency,
  categoryValue
) => {
  let putUrl =
    url +
    "/" +
    budgetsOfSelectedMonthAndCategory[0].id +
    "/components/" +
    budgetsOfSelectedMonthAndCategory[0].budgetComponents[0].id;
  budgetObj = {
    category: categoryValue,
    currency:
      budgetValue * 1 +
      budgetsOfSelectedMonthAndCategory[0].budgetComponents[0].currency,
    frequency: frequency,
  };

  return fetch(putUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
    body: JSON.stringify(budgetObj),
  }).then((response) => {
    if (response.ok) {
      return true;
    }
    return false;
  });
};

export const addBudget = (
  startDate,
  endDate,
  budgetValue,
  frequency,
  categoryValue
) => {
  budgetObj = {
    startDate: startDate,
    endDate: endDate,
    frequency: frequency,
    budgetComponents: [
      {
        createdAt: new Date(),
        category: categoryValue,
        currency: budgetValue,
        frequency: frequency,
        deleted: false,
        active: true,
      },
    ],
    deleted: false,
    active: true,
  };
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
    body: JSON.stringify(budgetObj),
  }).then((response) => {
    if (response.ok) {
      return true;
    }
    return false;
  });
};
