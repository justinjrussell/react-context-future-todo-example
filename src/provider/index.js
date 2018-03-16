import React, { Component } from "react";
import Context from "../context";
import { VisibilityFilters } from '../constants';

class Provider extends Component {
  state = {
    nextTodoId: 0,
    todos: [],
    visibility: VisibilityFilters.SHOW_ALL
  }
  _addTodo = (text) => {
    const nextTodoId = this.state.nextTodoId + 1;
    const todos = [
      ...this.state.todos,
      { id: nextTodoId, text, completed: false }
    ];
    this.setState({ nextTodoId, todos });
  }
  _toggleTodo = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.setState({todos});
  }
  _setVisibility = (visibility) => {
    this.setState({visibility});
  }
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          addTodo: this._addTodo,
          toggleTodo: this._toggleTodo,
          setVisibility: this._setVisibility
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
