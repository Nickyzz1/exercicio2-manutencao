import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
//criar estados $nome={djskj}