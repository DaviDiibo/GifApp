interface Props {
  searches: string[];
  handlePrevSearches: (search: string) => void;
}
const CustomPreviusSearches = ({ searches, handlePrevSearches }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search, i) => (
          <li key={i} onClick={() => handlePrevSearches(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomPreviusSearches;
