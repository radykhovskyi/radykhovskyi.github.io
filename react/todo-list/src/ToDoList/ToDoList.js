import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';
import {
  toggleTodo,
  deleteTodo,
  restoreTodo,
  saveTodo,
  setFilter,
  getVisibleTodos as getTodos,
  getFilterValue,
} from './store';

const ToDoList = ({ todos, onTodoClick, onTodoRemoveClick, onTodoRestoreClick, onTodoSave, filter, onFilterChange }) => {
  const handleClick = () => {
    onTodoSave(this.input.value, filter);
    this.input.value='';
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <select className="form-control" value={filter} onChange={onFilterChange}>
            <option value="all">all</option>
            <option value="completed">completed</option>
            <option value="not-completed">not completed</option>
            <option value="deleted">deleted</option>
          </select>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            {todos.map && todos.map(
              todo => (
                <ToDoItem
                  key={todo.id}
                  {...todo}
                  onClick={() => onTodoClick(todo.id)}
                  onRemoveClick={() => onTodoRemoveClick(todo.id)}
                  onRestoreClick={() => onTodoRestoreClick(todo.id)}
                />
              )
            )}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form className="form-inline todo-form">
            <div className="form-group mb-2">
              <input type="text" className="form-control" ref={(node) => { this.input = node; }} />
            </div>
            <button type="button" className="btn btn-primary mb-2" onClick={handleClick}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const state2Props = state => ({
  todos: getTodos(state),
  filter: getFilterValue(state),
});

const handlers = {
  onTodoClick: id => toggleTodo(id),
  onTodoRemoveClick: id => deleteTodo(id),
  onTodoRestoreClick: id => restoreTodo(id),
  onTodoSave: (name, filter) => saveTodo({ name, completed: filter === 'completed' }),
  onFilterChange: ({ target }) => setFilter(target.value),
};

export default connect(state2Props, handlers)(ToDoList);