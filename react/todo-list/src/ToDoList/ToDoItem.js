import React from 'react';

const ToDoItem = ({ id, name, completed, deleted, onClick, onRemoveClick, onRestoreClick }) => (
  <li className="list-group-item">
    <div className="form-check">
      <div className={deleted ? 'item-row deleted' : 'item-row'}>
        <input
          type="checkbox"
          className="form-check-input"
          id={`checkbox-${id}`}
          onChange={onClick}
          checked={completed}
        />
        <label className="form-check-label" htmlFor={`checkbox-${id}`}>
          {name}
        </label>

        {deleted
          ? <span className="item-control" onClick={onRestoreClick}>{"<-"}</span>
          : <span className="item-control" onClick={onRemoveClick}>×</span>}
      </div>
    </div>
  </li>
);

export default ToDoItem;
