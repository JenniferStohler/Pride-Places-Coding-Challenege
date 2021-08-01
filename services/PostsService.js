import axios from "axios";

const getAll = () => {
  return axios.get('api/posts');
}

const get = id => {
  return axios.get(`api/posts/${id}`);
}

getAll();
get();