import styles from './index.module.scss';

type Props = {};

export const ResultArea = ({}: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Result area</div>
      <div className={styles.value}>value from select</div>
    </div>
  );
};