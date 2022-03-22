import Link from "next/link";
import styles from "../styles/Menu.module.scss";
import Logo from '../public/logocrpto.png'

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <nav className={showMenu ? styles.show_menu : styles.nav}>
      <div className={styles.logo}>
          <Link href="/">
            <a onClick={() => setShowMenu(false)} >
              <img src={Logo.src} height="80px" alt="crypto Wallstreet logo" />
            </a>
          </Link>
      </div>
      <div className={styles.menu}>
        <Link href="/">
          <a className={styles.menu_item} onClick={() => setShowMenu(false)}>Home</a>
        </Link>
        <Link href="/cryptocurrencies">
          <a className={styles.menu_item} onClick={() => setShowMenu(false)}>Cryptocurrencies</a>
        </Link>
        <Link href="/exchanges">
          <a className={styles.menu_item} onClick={() => setShowMenu(false)}>Exchanges</a>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
