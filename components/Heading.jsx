import styles from "../styles/Heading.module.scss";
const Heading = ({ heading, subtitle }) => {
  return (
    <div>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default Heading;
