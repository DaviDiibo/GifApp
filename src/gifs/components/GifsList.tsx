import type { Gif } from "../interfaces/Gif.interfaces";
interface Props {
  gifs: Gif[];
}
const GifsList = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
};

export default GifsList;
