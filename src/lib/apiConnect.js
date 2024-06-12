import axios from 'axios';

const BASE_URL = 'http://localhost:9000';

export const fetchAllWidgets = () =>
  axios.get(`${BASE_URL}/v1/widgets`).then((response) => response.data);
export const fetchCreateWidget = (data) =>
  axios.post(`${BASE_URL}/v1/widgets`, data).then((response) => response.data);
export const fetchOneWidget = (name) =>
  axios.get(`${BASE_URL}/v1/widgets/${name}`).then((response) => response.data);
export const fetchUpdateWidget = (data) =>
  axios
    .put(`${BASE_URL}/v1/widgets/update`, data)
    .then((response) => response.data);
export const fetchDeleteWidget = (name) =>
  axios
    .delete(`${BASE_URL}/v1/widgets/${name}`)
    .then((response) => response.data);
