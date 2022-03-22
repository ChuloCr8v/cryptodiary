import styles from "../../styles/Header.module.scss";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/logocrpto.png";
import Link from "next/link";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideHeader, sethideHeader] = useState(false);
  const [scrollY, setScrollY] = useState("window.pageYOffset");

  let prevPos = scrollY;
  const header = () => {
    let currentPos = window.pageYOffset;
    if (currentPos > prevPos) {
      sethideHeader(true);
    } else {
      sethideHeader(false);
    }
    prevPos = currentPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", header);
    return () => {
      window.removeEventListener("scroll", header);
    };
  }, []);

  return (
    <header className={styles.header} id={hideHeader && styles.hide_header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src={Logo.src} height="35px" alt="crypto Wallstreet logo" />
            </a>
          </Link>
        </div>
        <FaBars
          id={showMenu && styles.rotate}
          className={styles.icon}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </header>
  );
};

export default Header;
