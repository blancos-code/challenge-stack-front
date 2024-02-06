import axios from "axios";
export  async function getProducteurs() {
  let response = '';

  try {
    await axios.get(import.meta.env.VITE_API_URL + "/api/producteurs").then((res) => {
      response = res.data;
    });
  } catch (e) { /* empty */ }

  return response;
}
