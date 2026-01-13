import { PlayCircleIcon } from 'lucide-react';

import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

import styles from './styles.module.css';

import type { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
  return (
    <form className={styles.form} action=''>
      <p>A próxima pausa será de {state.config.shortBreakTime} minutos</p>
      <div className={styles.formRow}>
        <DefaultInput
          id='input'
          labelText='Task'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
