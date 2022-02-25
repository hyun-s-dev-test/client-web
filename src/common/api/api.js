import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const requestGet = async (url, data) => {
  try {
    const res = await axios({
      baseURL,
      method: "get",
      url,
      params: data,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const requestPost = async (url, data) => {
  try {
    const res = await axios({
      baseURL,
      method: "post",
      url,
      data: data,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const requestPut = async (url, data) => {
  try {
    const res = await axios({
      baseURL,
      method: "put",
      url,
      data: data,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const requestPatch = async (url, data) => {
  try {
    const res = await axios({
      baseURL,
      method: "patch",
      url,
      data: data,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const requestDelete = async (url, data = null) => {
  try {
    const res = await axios({
      baseURL,
      method: "delete",
      url,
      data: data,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const request = {
  get: requestGet,
  post: requestPost,
  patch: requestPatch,
  put: requestPut,
  delete: requestDelete,
};
