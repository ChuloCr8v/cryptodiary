import Link from "next/link";
import styles from "../styles/Menu.module.scss";
const Menu = ({ showMenu }) => {
  return (
    <nav className={showMenu ? styles.show_menu : styles.nav}>
      <h1 className={styles.logo}>
        Crypto<span>WallStreet</span>
      </h1>
      <ol className={styles.menu}>
        <Link href="/">
          <a className={styles.menu_item}>Home</a>
        </Link>
        <li className={styles.menu_item}>Cryptocurrencies</li>
        <li className={styles.menu_item}>Crypto News</li>
        <li className={styles.menu_item}>Exchanges</li>
      </ol>
    </nav>
  );
};

export default Menu;
