import axios from "axios";

export const signup = (input) => {
  axios.post("http://localhost/api/user/save", input).then((response) => {
    console.log("response:", response.data);
  });
};

export const login = (email, password, setUser) => {
  axios
    .get(`http://localhost/api/user/`, {
      params: {
        email,
        password,
      },
    })
    .then((response) => {
      setUser(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
