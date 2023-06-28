import React, { useState } from "react";
import styles from "./Organizer.module.scss";
import options from "./options.json";
import classNames from "classnames";
import ArrowIcon from "./ArrowIcon";

interface IOrganizer {
  organizer: string;
  setOrganizer: React.Dispatch<React.SetStateAction<string>>;
}

const Organizer: React.FC<IOrganizer> = ({ organizer, setOrganizer }) => {
  const [opened, setOpened] = useState(false);
  const organized = organizer !== "";
  const organizerName =
    organized && options.find((option) => option.value === organizer)?.name;

  return (
    <button
      className={classNames({
        [styles.organizer]: true,
        [styles["organizer--active"]]: organized,
      })}
      onBlur={() => setOpened(false)}
      onClick={() => setOpened(!opened)}
    >
      <span>{organizerName || "Ordenar Por:"}</span>
      <ArrowIcon isOpened={opened} />
      <div
        className={classNames({
          [styles.organizer__options]: true,
          [styles["organizer__options--active"]]: opened,
        })}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={styles.organizer__option}
            onClick={() => setOrganizer(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Organizer;
