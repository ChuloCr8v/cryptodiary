import styles from "../../styles/Header.module.scss";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <FaBars
          className={styles.icon}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </div>
      <Menu showMenu={showMenu} />
    </header>
  );
};

export default Header;
