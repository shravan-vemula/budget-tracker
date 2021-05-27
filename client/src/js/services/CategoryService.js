import { api } from 'js/utils/resources'


export const getCategories = () => {
    return fetch(api.MOCK_SERVER+"/categories", {
      method: "GET",
    }).then((response) => {
        return response.json();
    });
  };