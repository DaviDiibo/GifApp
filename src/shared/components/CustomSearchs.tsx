import { useEffect, useState } from "react";

interface CustomSearchsProps {
  placeholder: string;
  handleSearch: (search: string) => void;
}

const CustomSearchs = ({
  placeholder = "Buscar",
  handleSearch,
}: CustomSearchsProps) => {
  // states --------------------------------------------------------
  const [search, setSearch] = useState("");
  const [contador, setContador] = useState(0);

  // useEffectEvent --------------------------------------------------
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (search.length <= 1) return;
      if (contador > 0) return;
      setContador((contador) => contador + 1);
      onSubmit();
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [search, handleSearch]);

  // input change --------------------------------------------------
  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
    setContador(0);
  };
  // submit --------------------------------------------------------
  const onSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    handleSearch(search.toLowerCase().trimEnd().trimStart());
    setSearch("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholder}
          onChange={onInputChange}
          value={search}
        />
        <button>Buscar</button>
      </div>
    </form>
  );
};

export default CustomSearchs;
