import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useContext, useEffect, useMemo, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
  useEffect(() => {
    document.title = 'Histórico - Chronos Pomodoro';
  }, []);

  const { state, dispatch } = useContext(TaskContext);
  const hasTasks = state.tasks.length > 0;

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  const [sortTasksOptions, setSortTasksOptions] = useState<{
    field: SortTasksOptions['field'];
    direction: SortTasksOptions['direction'];
  }>({
    field: 'startDate',
    direction: 'desc',
  });

  const sortedTasks = useMemo(() => {
    return sortTasks({
      tasks: state.tasks,
      field: sortTasksOptions.field,
      direction: sortTasksOptions.direction,
    });
  }, [state.tasks, sortTasksOptions.field, sortTasksOptions.direction]);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    setSortTasksOptions(prev => ({
      field,
      direction: prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm(
      'Tem certeza que deseja apagar o histórico?',
      confirmation => {
        if (!confirmation) return;
        dispatch({ type: TaskActionTypes.RESET_STATE });
      },
    );
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>
      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => {
                      handleSortTasks({ field: 'name' });
                    }}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    onClick={() => {
                      handleSortTasks({ field: 'duration' });
                    }}
                    className={styles.thSort}
                  >
                    Duração ↕
                  </th>
                  <th
                    onClick={() => {
                      handleSortTasks({ field: 'startDate' });
                    }}
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasks.map(task => {
                  const taskTypeDictionary = {
                    workTime: 'Foco',
                    shortBreakTime: 'Descanso curto',
                    longBreakTime: 'Descanso longo',
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Ainda não existem tarefas criadas
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}
