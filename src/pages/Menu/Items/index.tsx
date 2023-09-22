/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Item from "./Item";
import cardapio from "../../../data/cardapio.json";
import styles from "./Items.module.scss";
import { Cardapio } from "types/Prato";

interface IItems {
  search: string;
  filter: number | null;
  organizer: string;
}

const Items: React.FC<IItems> = ({ search, filter, organizer }) => {
  const [list, setList] = useState(cardapio);

  function searchTest(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function filterTest(id: number) {
    const filtered = filter === id;

    if (filter !== null) return filtered;

    return true;
  }

  function sortAscendingProperty(
    list: Cardapio,
    property: "size" | "serving" | "price"
  ) {
    return list.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }

  function organize(newList: Cardapio) {
    switch (organizer) {
      case "porcao":
        return sortAscendingProperty(newList, "size");
      case "qtd_pessoas":
        return sortAscendingProperty(newList, "serving");
      case "preco":
        return sortAscendingProperty(newList, "price");
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = cardapio.filter(
      (item) => searchTest(item.title) && filterTest(item.category.id)
    );
    setList(organize(newList));
  }, [search, filter, organizer]);

  const hasItems = list.length >= 1;

  return (
    <div className={styles.items}>
      {hasItems ? (
        list.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <span className={styles.items__not_found}>
          Não foi encontrado nenhum prato com este critério.
        </span>
      )}
    </div>
  );
};

export default Items;
