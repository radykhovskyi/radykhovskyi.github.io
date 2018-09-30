import { combineReducers } from 'redux';
// import { createSelector } from 'reselect';

import { getFilterFunc, filterList, get } from './helpers';
import {
  action,
  createReducer,
  mergePayload,
  lookupReducer,
  include,
  domainSelector,
} from '../redux-utils';

const initialTodoState = {
  id: null,
  name: '',
  completed: false,
  deleted: false,
}

const _toggleTodo = action('TODO::TOGGLE');
export const toggleTodo = id => _toggleTodo({ id });
let currentTodoId = 1;
const _saveTodo = action('TODO::SAVE');
export const saveTodo = (t = {}) => _saveTodo({ ...initialTodoState, ...t, id: currentTodoId++ });
const _deleteTodo = action('TODO::DELETE');
export const deleteTodo = (id) => _deleteTodo({ id });
const _restoreTodo = action('TODO::RESTORE');
export const restoreTodo = (id) => _restoreTodo({ id });
export const setFilter = action('TODO::SET-FILTER');
// toggleTodo(id)

const todo = createReducer(initialTodoState, {
  [_toggleTodo.type]: state => ({
    ...state, completed: !state.completed,
  }),
  [_deleteTodo.type]: state => ({
    ...state, deleted: true,
  }),
  [_restoreTodo.type]: state => ({
    ...state, deleted: false,
  }),
  [_saveTodo.type]: mergePayload,
});

const todoLookup = lookupReducer(todo);

const byId = createReducer({}, {
  [_toggleTodo.type]: todoLookup,
  [_deleteTodo.type]: todoLookup,
  [_restoreTodo.type]: todoLookup,
  [_saveTodo.type]: todoLookup,
});

const ids = createReducer([], {
  [_saveTodo.type]: (state, { payload } ) => include(state, payload.id),
});

const filter = createReducer('all', {
  [setFilter.type]: (_, { payload }) => payload,
});

const todos = combineReducers({ byId, ids, filter });

export default todos;

// ------- SELECTORS --------
const createSelector = (...selectors) => {
  const selector = selectors.pop();
  return (...args) => selector(
    ...selectors.map(s => s(...args))
  );
}

export const domain = domainSelector(
  state => state.todos
);

export const getTodos = createSelector(
  domain, ({ ids, byId }) => ids.map(id => byId[id])
);

export const getFilterValue = createSelector(
  domain, get('filter')
);

export const getFilter = createSelector(
  getFilterValue, getFilterFunc
);

export const getVisibleTodos = createSelector(
  getTodos, getFilter, filterList
);