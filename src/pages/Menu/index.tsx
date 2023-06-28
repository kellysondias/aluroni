import React, { useState } from "react";
import Searcher from "./Searcher";
import Filters from "./Filters";
import Organizer from "./Organizer";
import Items from "./Items";
import logo from "../../assets/logo.svg";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [organizer, setOrganizer] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} alt="Logo do Aluroni" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__title}>Cardápio</h3>
        <Searcher search={search} setSearch={setSearch} />
        <div className={styles.cardapio__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Organizer organizer={organizer} setOrganizer={setOrganizer} />
        </div>
        <Items search={search} filter={filter} organizer={organizer} />
      </section>
    </main>
  );
};

export default Menu;
