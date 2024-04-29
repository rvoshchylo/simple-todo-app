import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { actions as deleteTodoActions } from '../../features/deletedTodos.slice'
import { actions as todoActions } from '../../features/todos.slice'

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos)
  const dispatch = useAppDispatch();

  const handleDelete = (id: number, text: string) => {
    dispatch(todoActions.deleteTodo(id));
    dispatch(deleteTodoActions.addTodo({ id, text }));
  }
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <div key={todo.id} className="m-2">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {todo.text}
            <button onClick={() => handleDelete(todo.id, todo.text)} className="btn btn-danger">
              Delete
            </button>
          </li>
        </div>
      ))}
    </ul>
  )
}

export default TodoList;