import styles from './App.module.scss';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
      </div>
    </div>
  )
}

export default App;
