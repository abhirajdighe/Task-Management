import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />  {/* For viewing and updating task */}
        <Route path="/tasks/new" element={<TaskForm />} />  {/* For adding new tasks */}
      </Routes>
    </Router>
  );
}

export default App;
