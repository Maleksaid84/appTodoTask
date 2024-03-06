
import './App.css';
import { useSelector } from 'react-redux';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';




function App() {
  // Utiliser le hook useSelector pour accéder à l'état global
  const users = useSelector(state => state.todoReducer.users);

  return (
    <div className="App">
      <h1>ToDo App</h1>

      

      {/* Composant pour afficher la liste des tâches */}
      <ListTask users={users} />

      {/* Composant pour ajouter une tâche */}
      <Addtask />
      
    </div>
  );
}

export default App;
