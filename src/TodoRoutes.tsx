import { Route, Routes } from 'react-router-dom';
import { Todos } from './components/Todos';
import { DeletedTodos } from './components/DeletedTodos';

const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos/>} />
      <Route path="/deleted-todo" element={<DeletedTodos />} />
    </Routes>
  );
}

export default TodoRoutes;