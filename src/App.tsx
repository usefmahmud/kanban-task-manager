import AddNewBoard from './components/add-new-board';
import AppLayout from './components/app-layout';
import Board from './components/Board';

const App = () => {
  return (
    <AppLayout>
      <Board title='BACKLOG' color='#FFA0A0' />
      <Board title='IN PROGRESS' color='#BBFFA0' />
      <Board title='REVIEW' color='#FFD3A0' />
      <Board title='COMPLETED' color='#A0FDFF' />

      <AddNewBoard />
    </AppLayout>
  );
};

export default App;
