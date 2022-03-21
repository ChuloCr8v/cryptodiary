import Link from "next/link";
import styles from "../styles/Menu.module.scss";
import Logo from '../public/logocrpto.png'

const Menu = ({ showMenu }) => {
  return (
    <nav className={showMenu ? styles.show_menu : styles.nav}>
      <div className={styles.logo}>
        <img src={Logo.src} height="75px" alt="crypto Wallstreet logo" />
      </div>
      <div className={styles.menu}>
        <Link href="/">
          <a className={styles.menu_item}>Home</a>
        </Link>
        <Link href="/cryptocurrencies">
          <a className={styles.menu_item}>Cryptocurrencies</a>
        </Link>
        <Link href="/Exchanges">
          <a className={styles.menu_item}>Exchanges</a>
        </Link>
        <Link href="/">
          <a className={styles.menu_item}>News</a>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
