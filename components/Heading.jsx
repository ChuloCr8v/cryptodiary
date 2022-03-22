import styles from "../styles/Heading.module.scss";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Heading = ({ heading, subtitle }) => {
  useEffect(() => {
    Aos.init({duration: 500});
  })
  return (
    <div>
      <h2 className={styles.heading}  data-aos="fade-up" >{heading}</h2>
      <p className={styles.subtitle}  data-aos="fade-up" >{subtitle}</p>
    </div>
  );
};

export default Heading;
