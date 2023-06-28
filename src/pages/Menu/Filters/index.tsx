import React from "react";
import filters from "./filters.json";
import styles from "./Filters.module.scss";
import classNames from "classnames";

interface IFilters {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

type IOption = (typeof filters)[0];

const Filters: React.FC<IFilters> = ({ filter, setFilter }) => {
  function selectFilter(option: IOption) {
    if (filter === option.id) setFilter(null);
    else setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          key={option.id}
          onClick={() => selectFilter(option)}
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filter === option.id,
          })}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
