import AppLayout from './components/AppLayout';
import Board from './components/Board';

const App = () => {
  return (
    <AppLayout>
      <Board />
      <Board />
      <Board />
    </AppLayout>
  );
};

export default App;
