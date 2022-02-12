import styles from "../styles/Menu.module.scss";
const Menu = ({ showMenu }) => {
  return (
    <nav className={showMenu ? styles.show_menu : styles.nav}>
      <ol>
        <li className={styles.menu_item}>Home</li>
        <li className={styles.menu_item}>Cryptocurrencies</li>
        <li className={styles.menu_item}>Crypto News</li>
        <li className={styles.menu_item}>Exchanges</li>
      </ol>
    </nav>
  );
};

export default Menu;
