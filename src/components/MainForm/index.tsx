import { PlayCircleIcon } from 'lucide-react';

import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

import styles from './styles.module.css';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';

export function MainForm() {
  const { setState } = useContext(TaskContext);

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:00',
      };
    });
  }

  return (
    <form className={styles.form} action=''>
      <button type='button' onClick={handleClick}>
        Clicar
      </button>
      <div className={styles.formRow}>
        <DefaultInput
          id='input'
          labelText='Task'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className={styles.formRow}>
        <p>O próximo intervalo será de 25 minutos</p>
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
