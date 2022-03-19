import axios from "axios";
import { store } from "store";

export const signIn =
  (email: string, password: string, navigate: any) =>
  async (dispatch: typeof store.dispatch) => {
    const postData = {
      email,
      password,
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_AUTH_URL}/auth/signin`,
      postData
    );
    const { accessToken } = data;

    console.log(accessToken);
    localStorage.setItem("fflg_token", accessToken);
    navigate("/");
  };

export const signUp =
  (username: string, email: string, password: string, navigate: any) =>
  async (dispatch: typeof store.dispatch) => {
    const postData = {
      email,
      username,
      password,
    };

    await axios.post(`${process.env.REACT_APP_AUTH_URL}/auth/signup`, postData);

    dispatch(signIn(email, password, navigate));
  };
