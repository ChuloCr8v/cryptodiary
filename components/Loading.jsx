import styles from '../styles/Loading.module.scss'
import {FaCog} from 'react-icons/fa'

const Loading = () => {
  
  return (
    <section className={styles.loading}>
      <div className={styles.container}>
        <FaCog className={styles.icon} />
        <p className={styles.loading_msg} > Serving Hot 🔥 crypto dish 🍲 </p>
      </div>
    </section>
   );
 };

export default Loading