import axios from "axios";

// const baseURL = process.env.REACT_APP_API_URL;

const requestGet = async (url, data = null) => {
  const res = await axios({
    // baseURL,
    method: "get",
    url,
    params: data,
  });
  console.log(res.data);
  return res;
};

const requestPost = async (url, data = null) => {
  const res = await axios({
    // baseURL,
    method: "post",
    url,
    data: data,
  });
  console.log(res.data);
  return res;
};

const requestPut = async (url, data = null) => {
  const res = await axios({
    // baseURL,
    method: "put",
    url,
    data: data,
  });
  console.log(res.data);
  return res;
};

const requestPatch = async (url, data = null) => {
  const res = await axios({
    // baseURL,
    method: "patch",
    url,
    data: data,
  });
  console.log(res.data);
  return res;
};

const requestDelete = async (url, data = null) => {
  const res = await axios({
    // baseURL,
    method: "delete",
    url,
    data: data,
  });
  console.log(res.data);
  return res;
};

export const request = {
  get: requestGet,
  post: requestPost,
  patch: requestPatch,
  put: requestPut,
  delete: requestDelete,
};
