import React from "react";
import styles from "./Item.module.scss";
import items from "../items.json";
import classNames from "classnames";

type Props = (typeof items)[0];

const Item: React.FC<Props> = (props) => {
  const { title, description, category, size, serving, price, photo } = props;

  const alt = `Imagem representando o prato "${title}".`;
  const label = category.label;
  const priceText = `R$${price.toFixed(2)}`;
  const servingText = `Serve ${serving} pessoa${serving > 1 ? "s" : ""}`;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={alt} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames(
              styles.item__type,
              styles[`item__type__${category.type}`]
            )}
          >
            {label}
          </div>
          <div className={styles.item__portion}>{size}</div>
          <div className={styles.item__qtdpeople}>{servingText}</div>
          <div className={styles.item__value}>{priceText}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
