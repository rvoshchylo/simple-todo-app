import { useAppSelector } from '../../app/hooks';

const DeletedTodos = () => {
  const deletedTodos = useAppSelector((state) => state.deletedTodos.todos);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col p-2">
              <h4>Deleted Todos</h4>
            </div>
          </div>
          <div className="row" id="todo-container">
            <ul className="list-group">
              {deletedTodos.map((todo) => (
                <div key={todo.id} className="m-2">
                  <li className="list-group-item d-flex justify-content-between align-items-center rounded">
                    {todo.text}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletedTodos;