import styles from "../styles/Stats.module.scss";
import Heading from "./Heading";
const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <Heading
          heading={"Updated Statistics"}
          subtitle={
            "Observe the updated cryptocurrency statistics right on the spot"
          }
        />
        <div className={styles.stats_container}></div>
      </div>
    </section>
  );
};

export default Stats;
