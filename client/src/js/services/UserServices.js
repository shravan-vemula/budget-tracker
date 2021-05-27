import axios from "axios";
import { api } from "js/utils/resources";

let id = 0;
const theToken = localStorage.getItem("access_token");
const Email = localStorage.getItem("user_email");
let checkuserId = api.BACKEND_USER_URL + "/users";

export const userGeneralNotification = (id) => {
  return axios.get(api.BACKEND_USER_URL + `/settings/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
  });
};

export const userGeneralSettings = (id) => {
  return axios.get(api.BACKEND_USER_URL + `/settings/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
  });
};

export const getUserDetails = (id) => {
  return axios.get(api.BACKEND_USER_URL + `/details/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
  });
};

export const getUserId = (setId) => {
  return fetch(checkuserId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
  })
    .then((response) => {
      if (response.status === 500) {
        console.log("user id  not found");
        fetch(checkuserId, {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + theToken,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data.id, "show me the id");
            setId(data.id);
          })

          .catch((err) => {
            console.log("hello umm", err);
          });
      } else {
        console.log("user data is present");
      }
    })
    .catch((err) => {
      console.log("bye");
    });
};

export const putUserSettings = (id, data) => {
  return axios
    .put(
      api.BACKEND_USER_URL + `/settings/${id}`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + theToken,
        },
      }
    )
    .then(function (response) {
      console.log(response);
    });
};

export const putUserDetails = (id,data) => {
  return fetch(api.BACKEND_USER_URL + `/details/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + theToken,
    },
  })
    .then((response) => {})
    .catch((err) => {});
};
