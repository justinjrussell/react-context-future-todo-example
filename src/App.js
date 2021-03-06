import React, { Component } from "react";
import AddTodo from "./consumers/AddTodo";
import TodoList from "./consumers/TodoList";
import Footer from "./consumers/Footer";
import Provider from "./Provider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <AddTodo />
        <TodoList />
        <Footer />
      </Provider>
    );
  }
}

export default App;
