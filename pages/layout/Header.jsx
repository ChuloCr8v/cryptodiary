import styles from "../../styles/Header.module.scss";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideHeader, sethideHeader] = useState(false);
  const [scrollY, setScrollY] = useState('window.pageYOffset' );
  
    let prevPos = scrollY
    const header = () => {
      let currentPos = window.pageYOffset 
      if(currentPos > prevPos) {
        sethideHeader(true)
      } else {
        sethideHeader(false)
      }
        prevPos = currentPos
    }
 
 useEffect(()=> {
   window.addEventListener('scroll', header);
   return () => {
    window.removeEventListener('scroll', header)
   } 
 }, [])
  
  return (
    <header className={styles.header} id={hideHeader && styles.hide_header} >
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <FaBars
          id = {showMenu && styles.rotate} 
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
