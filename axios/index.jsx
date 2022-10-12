import axios from "axios";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

const MagicEdenAxios = axios.create({
  baseURL:
    "https://corsanywhere.herokuapp.com/https://api-mainnet.magiceden.dev/v2",
});

const HowRareAxios = axios.create({
  baseURL: "https://corsanywhere.herokuapp.com/https://api.howrare.is/v0.1",
});

export { MagicEdenAxios, HowRareAxios };
