import logo from "../../assets/logo.svg";
import styles from "./MenuCardapio.module.scss";
import { Link } from "react-router-dom";

export default function MenuCardapio() {
  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];

  return (
    <nav className={styles.menu}>
      <img src={logo} alt="Logo do Aluroni" />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
