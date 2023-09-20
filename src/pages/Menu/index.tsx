import React, { useState } from "react";
import Searcher from "./Searcher";
import Filters from "./Filters";
import Organizer from "./Organizer";
import Items from "./Items";
import styles from "./Menu.module.scss";
import stylesTema from "../../styles/Tema.module.scss";

const Menu: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [organizer, setOrganizer] = useState("");

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Searcher search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Organizer organizer={organizer} setOrganizer={setOrganizer} />
      </div>
      <Items search={search} filter={filter} organizer={organizer} />
    </section>
  );
};

export default Menu;
