import axios from "axios";

const GiphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
    offset: 0,
    rating: "g",
    lang: "es",
    bundle: "messaging_non_clips",
  },
});

export default GiphyApi;
