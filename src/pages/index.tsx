// import { Board } from '../components/Board/board';
import { FloartMino } from '../components/froatMino/floatMIno';
import { Board } from '../components/Board/board';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <FloartMino />
      <Board />
    </div>
  );
};

export default Home;
