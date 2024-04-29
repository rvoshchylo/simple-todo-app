import { useAppSelector } from '../../app/hooks';

const DeletedTodos = () => {
  const deletedTodos = useAppSelector((state) => state.deletedTodos.todos);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Deleted Todos</h1>
      <ul className="list-group">
        {deletedTodos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeletedTodos;