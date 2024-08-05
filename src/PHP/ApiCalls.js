import axios from "axios";
import { loginState } from "./StateApiCalls";

export const signup = (input) => {
  axios.post("http://localhost/api/signup", input)
    .then((response) => {
      console.log("response:", response.data);
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
};

export const login = (email, password, setUser) => {
  axios
    .get(`http://localhost/api/login`, {
      params: {
        email,
        password,
      },
    })
    .then((response) => {
      setUser(response.data);
      loginState(email,password)
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUser = (email) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost/api/searchUserByEmail/", { params: { email } })
      .then((response) => {
        const { user } = response.data;
        resolve(user.name);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const changePassword = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .put("http://localhost/api/forgetpassword/", {
        email: email,
        password: password,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
