import CustomHeader from "./shared/components/CustomHeader";
import CustomPreviusSearches from "./shared/components/CustomPreviusSearches";
import CustomSearchs from "./shared/components/CustomSearchs";
import GifsList from "./gifs/components/GifsList";
import useGiphy from "./gifs/hooks/useGiphy";
import "./GifsApp.css";

const GifApp = () => {
  const { PrevSearches, gifs, handleSearch } = useGiphy();
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="GifApp"
        description="Descubre y comparte el mejor Gif"
      />
      {/* Search */}
      <CustomSearchs placeholder="Buscar" handleSearch={handleSearch} />
      {/* Busquedas previas */}
      <CustomPreviusSearches
        searches={PrevSearches}
        handlePrevSearches={handleSearch}
      />
      {/* Gifs */}
      <GifsList gifs={gifs} />
    </>
  );
};

export default GifApp;
