import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch } from '../../app/hooks';
import { actions } from '../../features/todos.slice';
import { TodoList } from '../TodoList';
const Todos: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!todoTitle.trim()){
      alert('Please enter a todo title')
      return;
    }
    dispatch(actions.createTodo({ text: todoTitle }))
    setTodoTitle('');
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col p-2">
              <h4>Todo App</h4>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="justify-content-between text-white p-2 d-flex gap-2">
            <div className="form-group flex-fill mb-2">
              <input onChange={(event) => setTodoTitle(event.target.value)} type="text" className="form-control pl-0" value={todoTitle} />
            </div>
            <button type="submit" className="btn btn-primary mb-2 ml-2">Add todo</button>
          </form>
          <div className="row" id="todo-container">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;