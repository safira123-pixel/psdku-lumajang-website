import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    // "Content-type": "application/json"
    'Content-type': 'multipart/form-data',

  },
});