import { useContext, useEffect, useRef } from 'react';
import { Container } from '../../components/Container';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';
import { showMessage } from '../../adapters/showMessage';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  useEffect(() => {
    document.title = 'Configurações - Chronos Pomodoro';
  }, []);

  const { state, dispatch } = useContext(TaskContext);

  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Use apenas números por favor');
    }

    if (workTime < 1 || workTime > 90) {
      formErrors.push('Digite valores entre 1 e 90 para foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 15) {
      formErrors.push('Digite valores entre 1 e 15 para descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.UPDATE_CONFIG,
      payload: {
        workTime: Number(workTime),
        shortBreakTime: Number(shortBreakTime),
        longBreakTime: Number(longBreakTime),
      },
    });

    showMessage.success('Valores salvos com sucesso');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo
        </p>
      </Container>

      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='Foco (Máx: 90min)'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
            />
          </div>

          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto (Máx: 15min)'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
            />
          </div>

          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso longo (Máx: 30min)'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
            />
          </div>

          <DefaultButton
            icon={<SaveIcon />}
            aria-label='Salvar configurações'
            title='Salvar configurações'
          />
        </form>
      </Container>
    </MainTemplate>
  );
}
