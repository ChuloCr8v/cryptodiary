import styles from "../../styles/Footer.module.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FaTwitter, FaFacebook } from "react-icons";
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  
  useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.logo_container}>
           <div className={styles.logo}>
             <h1  data-aos="fade-left"  className={styles.logo}> CryptoDaily </h1>
           </div>
            <p data-aos="fade-up"  className={styles.description}>
              CryptoDaily is the place to get your hands on some of the latest cryptocurrency trends, news and market data.
            </p>
          </div>
          <div className={styles.footer_section} id={styles.col_2}>
            <h3 data-aos="fade-up"  className={styles.section_title}>Menu  </h3>
            <a href="#" data-aos="fade-left"  className={styles.footer_menu_item}>
              Home
            </a>
            <a href="#"  data-aos="fade-right" className={styles.footer_menu_item}>
              Cryptocurrencies
            </a>
            <a href="#" data-aos="fade-up"  className={styles.footer_menu_item}>
              Exchanges
            </a>
            <a href="#"  data-aos="fade-left" className={styles.footer_menu_item}>
              Crypto News
            </a>
          </div>
        
          <div className={styles.footer_section} id={styles.newsletter}>
            <h3 data-aos="fade-up"  className={styles.section_title}>Newsletter </h3>
            <form  data-aos="fade-left" action="/" method="POST" className={styles.form}>
              <input type="email" required placeholder="Your Email Address" />
              <input type="submit" value="Subscribe" />
            </form>
         {/*   <div className={styles.socials}>
              <FaTwitter className={styles.icon} />
              <FaFacebook className={styles.icon} />
            </div> */}
          </div>
        </div>
        <div className={styles.footer_credits}>
          <p className={styles.credits}>
            {" "}
            Designed and built by
            <span>
              <a href="https://devc.tech"> Devc.tech</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
