import axios from "axios";
export async function getProducteurs() {
  let response = "";

  try {
    await axios
      .get(import.meta.env.VITE_API_URL + "/api/producteurs")
      .then((res) => {
        response = res.data;
      });
  } catch (e) {
    /* empty */
  }

  return response;
}
export async function getProducteur(id) {
  let response = "";

  try {
    await axios
      .get(import.meta.env.VITE_API_URL + "/api/producteurs/" + id)
      .then((res) => {
        response = res.data;
      });
  } catch (e) {
    /* empty */
  }

  return response;
}

export async function addCommentProducteur(payload) {
  let response = "";
  try {
    await axios
      .post(
        import.meta.env.VITE_API_URL + "/api/commentaire_producteurs",
        payload
      )
      .then((res) => {
        response = res.data;
      });
  } catch (e) {
    /* empty */
  }
  return response;
}

export async function updateProducteur(id, payload) {
  let response = "";
  let payload_json = JSON.stringify(payload);
  try {
    await axios
      .put(
        import.meta.env.VITE_API_URL + "/api/producteurs/" + id,
        payload_json
      )
      .then((res) => {
        response = res.data;
      });
  } catch (e) {
    /* empty */
  }

  return response;
}
