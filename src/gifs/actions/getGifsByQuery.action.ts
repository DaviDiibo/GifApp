import type { GiphyResponse } from "../interfaces/Giphy.response";
import type { Gif } from "../interfaces/Gif.interfaces";
import GiphyApi from "../Api/Giphy.api";

const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const url = `/search`;
  const response = await GiphyApi<GiphyResponse>(url, {
    params: {
      q: query,
      limit: 25,
    },
  });
  const gifs = response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));

  return gifs;
};
export default getGifsByQuery;
// export interface Gif {
//     id: string;
//     title: string;
//     url: string;
//     width: number;
//     height: number;
// }
