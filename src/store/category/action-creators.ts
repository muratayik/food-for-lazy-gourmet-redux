import { store } from "store";
import getAxiosObject from "utils/httpService";

export const createCategory =
  ({
    name,
    imageUrl,
    description,
    navigate,
  }: {
    name: string;
    imageUrl: string;
    description: string;
    navigate: any;
  }) =>
  async (dispatch: typeof store.dispatch) => {
    const postData = { name, imageUrl, description };

    console.log(postData);

    const { data } = await getAxiosObject().post(
      `${process.env.REACT_APP_BUSINESS_API_URL}/category`,
      postData
    );

    console.log(data);
    navigate("/");
  };
