import axios from "axios";

export  async function handleDeadBackend() {
  let response = '';

  try {
    await axios.get(import.meta.env.VITE_API_URL + "/health").then((res) => {
      response = res.data;
    });
  } catch (e) {
  } finally {
    if (response === "") {
      alert("Backend de l'application introuvable. Essayez de redémarrer le serveur ou configurez l'url de l'api dans le .env.local");
    }
  }
}
