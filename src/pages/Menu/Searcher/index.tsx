import React from "react";
import styles from "./Searcher.module.scss";
import { CgSearch } from "react-icons/cg";

interface ISearcher {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searcher: React.FC<ISearcher> = ({ search, setSearch }) => {
  return (
    <div className={styles.searcher}>
      <input
        type="text"
        value={search}
        placeholder="Buscar"
        onChange={(event) => setSearch(event.target.value)}
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
};

export default Searcher;
