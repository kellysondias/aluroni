import styles from "./Item.module.scss";
import TagsPrato from "../../../../components/MenuCardapio/TagsPrato";
import { Prato } from "types/Prato";
import { useNavigate } from "react-router-dom";

const Item = (props: Prato) => {
  const { id, title, description, photo } = props;
  const alt = `Imagem representando o prato "${title}".`;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__image}>
        <img src={photo} alt={alt} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
};

export default Item;
