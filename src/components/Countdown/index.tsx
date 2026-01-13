import styles from './styles.module.css';

import type { HomeProps } from '../../pages/Home';

export function CountDown({ state }: HomeProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
