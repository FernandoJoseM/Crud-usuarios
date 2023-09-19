import axios from "axios";
import { useState } from "react";

const useFetch = (urlBase) => {
  const [infoApi, setinfoApi] = useState();
  const getApi = (path) => {
    const url =`${urlBase}${path}`;
    axios
      .get(url)
      .then((res) => setinfoApi(res.data))
      .catch((err) => console.log(err));
  };

  const postApi = (path, data) => {
    const url = `${urlBase}${path}`;
    axios
      .post(url, data)
      .then((res) => setinfoApi([...infoApi, res.data]))
      .catch((err) => console.log(err));
  };

  const deleteApi = (path, id) => {
    const url = `${urlBase}${path}${id}/`;
    axios
      .delete(url)
      .then((res) => setinfoApi(infoApi.filter((el) => el.id !== id)))
      .catch((err) => console.log(err));
  };
  const updateApi = (path, id, data) => {
    const url = `${urlBase}${path}${id}/`;
    axios
      .patch(url, data)
      .then((res) => setinfoApi(infoApi.map((el) => id == el.id?res.data:el)));
  };
  return [infoApi,getApi, postApi, deleteApi, updateApi];
};

export default useFetch;
