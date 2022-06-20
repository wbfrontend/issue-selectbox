import { Select, ResultArea, Footer } from 'src/components';
import { COUNTRIES } from 'src/data';
import styles from './index.module.scss';

export const App = () => {
  console.log({ COUNTRIES });

  return (
    <div className={styles.root}>
      <ResultArea />
      <Select />
      <Footer />
    </div>
  );
};
