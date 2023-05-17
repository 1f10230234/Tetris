import { useState } from 'react';
import { Block } from '../components/Block/Block';
import styles from './index.module.css';

const Home = () => {
  const [color, setColor] = useState('#0f0');
  return (
    <div className={styles.container}>
      <main className={styles.main}>{<Block color={color} onClick={setColor} />}</main>
    </div>
  );
};

export default Home;
