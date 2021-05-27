import { api } from 'js/utils/resources'

const theToken = localStorage.getItem('access_token');

export const getBanks = () => {
    return fetch(api.BACKEND_USER_URL+"/Banks", {
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
