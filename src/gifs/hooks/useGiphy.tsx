import { useRef, useState } from "react";
import type { Gif } from "../interfaces/Gif.interfaces";
import getGifsByQuery from "../actions/getGifsByQuery.action";

const useGiphy = () => {
  const [PrevSearches, setPrevSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const GifCache = useRef<Record<string, Gif[]>>({});

  // historias de busquedas ------------------------------------------
  const handlePrevSearches = (search: string) => {
    if (PrevSearches.includes(search)) {
      setPrevSearches((prevSearches) =>
        prevSearches.filter((s) => s !== search),
      );
    }
    setPrevSearches((prevSearches) => [...prevSearches, search]);
    if (PrevSearches.length >= 4) {
      setPrevSearches((prevSearches) => prevSearches.slice(1));
    }
  };
  // busqueda de gifs -----------------------------------------------
  const handleSearch = async (search: string) => {
    if (GifCache.current[search]) {
      setGifs(GifCache.current[search]);
      return;
    }
    const gifs = await getGifsByQuery(search);
    setGifs(gifs);
    handlePrevSearches(search);
    GifCache.current[search] = gifs;
  };

  return { PrevSearches, gifs, handleSearch };
};

export default useGiphy;
