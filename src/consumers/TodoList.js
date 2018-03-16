import React from "react";
import Todo from "../components/Todo";
import Context from "../context";
import { VisibilityFilters } from "../constants";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
};

const TodoList = () => (
  <ul>
    <Context.Consumer>
      {context => {
        const { todos, visibility } = context.state;
        return getVisibleTodos(todos, visibility).map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => context.toggleTodo(todo.id)}
          />
        ));
      }}
    </Context.Consumer>
  </ul>
);

export default TodoList;
