import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { ToastContainer } from 'react-toastify';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
