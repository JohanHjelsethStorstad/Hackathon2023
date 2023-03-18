import styles from './App.module.scss';
import Header from './components/Header';
import DataModule from './components/DataModule';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <DataModule service='temperaturesensor' name='Temperature'/>
      </div>
    </div>
  )
}

export default App;
