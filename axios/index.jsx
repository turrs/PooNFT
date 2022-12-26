import axios from 'axios';
axios.defaults.headers = {
  'Content-Type': 'application/json',
};

const MagicEdenAxios = axios.create({
  baseURL: 'https://proxy.cors.sh/https://api-mainnet.magiceden.dev/v2',
});

const HowRareAxios = axios.create({
  baseURL: 'https://proxy.cors.sh/https://api.howrare.is/v0.1',
});

export { MagicEdenAxios, HowRareAxios };
