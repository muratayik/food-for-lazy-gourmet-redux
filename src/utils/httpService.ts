import axios from "axios";

const getAxiosObject = () =>
  axios.create({
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("fflg_token") || ""}`,
    },
  });

export default getAxiosObject;
