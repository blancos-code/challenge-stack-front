import axios from "axios";
export  async function getMarches() {
  let response = '';

  try {
    await axios.get(import.meta.env.VITE_API_URL + "/api/marches").then((res) => {
      response = res.data;
    });
  } catch (e) { /* empty */ }

  return response;
}